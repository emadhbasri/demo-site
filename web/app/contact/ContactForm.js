'use client';

import { useRef, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | done
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const inFlight = useRef(false);

  async function onSubmit(e) {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus('sending');
    setErrors({});
    setFormError('');

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        inFlight.current = false;
        setStatus('done');
        return;
      }
      setErrors(body.errors || {});
      setFormError(body.errors ? '' : body.error || 'ثبت نظر انجام نشد. لطفاً دوباره تلاش کنید.');
    } catch {
      setFormError('اتصال برقرار نشد. لطفاً دوباره تلاش کنید.');
    }
    inFlight.current = false;
    setStatus('idle');
  }

  if (status === 'done') {
    return (
      <div className="notice" role="status">
        <p>ممنون! نظرتان ثبت شد.</p>
        <button type="button" className="btn btn-secondary" onClick={() => setStatus('idle')}>
          ارسال نظر دیگر
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">نام</label>
        <input id="name" name="name" type="text" autoComplete="name" maxLength={100} placeholder="مثلاً علی" />
        {errors.name && <p className="field-error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone">تلفن (اختیاری)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          dir="ltr"
          autoComplete="tel"
          inputMode="tel"
          placeholder="09123456789"
        />
        {errors.phone && <p className="field-error">{errors.phone}</p>}
      </div>

      <div className="field">
        <label htmlFor="message">نظر شما</label>
        <textarea id="message" name="message" rows={5} maxLength={2000} placeholder="نظرتان را اینجا بنویسید" />
        {errors.message && <p className="field-error">{errors.message}</p>}
      </div>

      {formError && (
        <p className="field-error" role="alert">
          {formError}
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
        {status === 'sending' ? 'در حال ارسال…' : 'ارسال نظر'}
      </button>
    </form>
  );
}
