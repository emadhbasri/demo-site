import Link from 'next/link';
import ContactForm from './ContactForm';

export const metadata = { title: 'نظر شما | کافه بهار' };

export default function ContactPage() {
  return (
    <main className="page">
      <h1>نظر شما</h1>
      <p className="lead">نظر یا پیشنهادتان را برایمان بنویسید.</p>
      <ContactForm />
      <Link href="/" className="back-link">
        بازگشت به صفحه‌ی اصلی
      </Link>
    </main>
  );
}
