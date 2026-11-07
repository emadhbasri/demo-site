import localFont from 'next/font/local';
import './globals.css';

const vazir = localFont({
  src: './fonts/Vazirmatn-Variable.woff2',
  variable: '--font-vazir',
  weight: '100 900',
  display: 'swap',
});

export const metadata = {
  title: 'کافه بهار',
  description: 'منوی دیجیتال کافه بهار',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5EBDD',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body>{children}</body>
    </html>
  );
}
