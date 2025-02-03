import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Demo Pan',
  description: 'Demostrate course performace widget',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
