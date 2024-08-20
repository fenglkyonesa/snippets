import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'yzgz.cc - ready-to-use background snippets for web developers',
  description:
    'Ready-to-use, simply copy and paste into your next project. All snippets crafted with Tailwind CSS and Vanilla CSS for easy integration.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
    <Head>
      <meta name="baidu-site-verification" content="codeva-sM7X7EtaVc" />
    </Head>
      <body className={inter.className}>{children}
      </body>
    </html>
  );
}
