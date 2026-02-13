import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'JobFinder AI',
  description: 'AI-native resume and job matching experience',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
