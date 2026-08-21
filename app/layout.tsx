import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Елена Марцинишина - финансовый директор для бизнеса',
  description: 'Управленческий учёт, финансовое планирование и рост прибыли для бизнеса.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
