import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const ubranist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Pawan Dai',
  description: 'Created by Pawan Awasthi. All rights reserved.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={ubranist.className}>{children}</body>
    </html>
  );
}
