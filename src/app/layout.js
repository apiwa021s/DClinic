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
    default: 'D Bangkok Clinic - บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ',
    template: 'เราพร้อมให้บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ',
  },
  description: 'D Bangkok Clinic - บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ',
  openGraph: {
    title: 'D Bangkok Clinic - บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ',
    description: 'เราพร้อมให้บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ และผลิตภัณฑ์ที่ปลอดภัยและมีใบรับรอง อย. ที่ ดีแบ็งค็อกคลินิกเวชกรรม เรามุ่งมั่นที่จะสร้างความพึงพอใจสูงสุดให้กับผู้ใช้บริการ ด้วยเทคโนโลยีด้านความงามที่ทันสมัย และทีมแพทย์ที่มีความเชี่ยวชาญ เพื่อผลลัพธ์ที่ตรงตามความต้องการของคุณลูกค้าเป็นสำคัญ เชื่อมั่นในบริการของเราเพื่อให้คุณได้ผลลัพธ์ที่ดีที่สุด เยี่ยมชมเราได้วันนี้และสัมผัสประสบการณ์ความงามที่ยอดเยี่ยม',
    images: ['/logo_01_0.png'],
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
