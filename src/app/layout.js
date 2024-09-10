import { Figtree, Prompt } from 'next/font/google';
import './sass/index.scss';

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-primary',
});

const prompt2 = Prompt({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary', // Update this if needed to match your usage
});

export const metadata = {
  title: {
    absolute: '',
    default: 'ProHealth - Medical and Healthcare NextJS Template',
    template: '%s | ProHealth - Medical and Healthcare NextJS Template',
  },
  description: 'ProHealth - Medical and Healthcare NextJS Template',
  openGraph: {
    title: 'ProHealth - Medical and Healthcare NextJS Template',
    description: 'ProHealth - Medical and Healthcare NextJS Template',
    images: ['/openGraphImage.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${prompt.variable} ${prompt2.variable}`}>
        {children}
      </body>
    </html>
  );
}
