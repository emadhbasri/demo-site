const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'db',
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

const app = express();
app.use(express.json({ limit: '10kb' }));

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

const PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹';
const ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

function toLatinDigits(s) {
  return s.replace(/[۰-۹٠-٩]/g, (d) => {
    const i = PERSIAN_DIGITS.indexOf(d);
    return String(i >= 0 ? i : ARABIC_DIGITS.indexOf(d));
  });
}

// Returns { values } or { errors }. Error messages are shown to the customer, so they are Persian.
function validateMessage(body) {
  const errors = {};
  const str = (v) => (typeof v === 'string' ? v.trim() : '');

  const name = str(body.name);
  const phone = toLatinDigits(str(body.phone)).replace(/[\s-]/g, '');
  const message = str(body.message);

  if (!name) errors.name = 'لطفاً نام خود را بنویسید.';
  else if (name.length > 100) errors.name = 'نام نباید بیشتر از ۱۰۰ حرف باشد.';
  if (phone && !/^\+?\d{7,15}$/.test(phone)) errors.phone = 'شماره‌ی تلفن معتبر نیست.';
  if (!message) errors.message = 'لطفاً متن نظر را بنویسید.';
  else if (message.length > 2000) errors.message = 'متن نظر نباید بیشتر از ۲۰۰۰ حرف باشد.';

  if (Object.keys(errors).length) return { errors };
  return { values: { name, phone: phone || null, message } };
}

app.post('/api/messages', async (req, res) => {
  const { values, errors } = validateMessage(req.body || {});
  if (errors) return res.status(400).json({ errors });

  try {
    await pool.query('INSERT INTO messages (name, phone, message) VALUES ($1, $2, $3)', [
      values.name,
      values.phone,
      values.message,
    ]);
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error('insert message failed', err);
    res.status(500).json({ error: 'ثبت نظر انجام نشد. لطفاً دوباره تلاش کنید.' });
  }
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id         SERIAL PRIMARY KEY,
      name       TEXT,
      phone      TEXT,
      message    TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `);
}

initDb()
  .then(() => {
    app.listen(4000, () => console.log('api listening on 4000'));
  })
  .catch((err) => {
    console.error('database init failed', err);
    process.exit(1);
  });
