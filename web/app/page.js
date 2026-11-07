import Link from 'next/link';
import { cafe } from './config';

export default function Home() {
  return (
    <main className="intro">
      <header className="intro-head">
        <h1>{cafe.name}</h1>
        <p className="tagline">منوی به‌روز، همین‌جا، با یک اسکن</p>
        <p>{cafe.about}</p>
      </header>

      <dl className="intro-info">
        <div>
          <dt>ساعت کار</dt>
          <dd>{cafe.hours}</dd>
        </div>
        <div>
          <dt>آدرس</dt>
          <dd>{cafe.address}</dd>
        </div>
      </dl>

      <nav className="intro-actions" aria-label="دسترسی سریع">
        <Link href="/menu" className="btn btn-primary">
          مشاهده‌ی منو
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          نظر شما
        </Link>
      </nav>
    </main>
  );
}
