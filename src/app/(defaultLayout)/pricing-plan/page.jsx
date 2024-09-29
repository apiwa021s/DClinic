"use client";
import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle10 from '@/app/ui/Section/BannerSection/BannerSectionStyle10';
import BannerSectionStyle3 from '@/app/ui/Section/BannerSection/BannerSectionStyle3';
import FaqSectionStyle4 from '@/app/ui/Section/FaqSection/FaqSectionStyle4';
import PricingSection from '@/app/ui/Section/PricingSection';

import bannerImg from '../../../../public/images/pricing_plan/banner_img.png';
import bannerImgBtm from '../../../../public/images/pricing_plan/banner_img_2.png';
import faqImg from '../../../../public/images/home_4/faq_img.jpeg';

const pricingData = [
  {
    title: 'แพ็กเกจยกกระชับผิวหน้า',
    subTitle:
      'การยกกระชับผิวหน้าด้วยเทคโนโลยี Oligio เหมาะสำหรับผู้ที่ต้องการยกกระชับผิวหน้าโดยไม่ต้องผ่าตัด',
    price: '฿7,999',
    period: '/ครั้ง',
    featureList: [
      'ปรึกษาแพทย์เฉพาะทาง',
      'ยกกระชับหน้าและคอ',
      'ปรับโครงสร้างผิว',
    ],
    btnText: 'เริ่มต้นวันนี้',
    btnUrl: '/contact',
    popular: true,
  },
  {
    title: 'แพ็กเกจทำตาสองชั้น',
    subTitle:
      'บริการทำตาสองชั้น โดยแพทย์ผู้เชี่ยวชาญ เพื่อดวงตาที่ดูคมชัดและสวยงาม',
    price: '฿15,000',
    period: '/ครั้ง',
    featureList: [
      'ปรึกษาแพทย์',
      'ออกแบบชั้นตาให้เหมาะสม',
      'การดูแลหลังการผ่าตัด',
    ],
    btnText: 'เริ่มต้นวันนี้',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'แพ็กเกจฟิลเลอร์',
    subTitle:
      'บริการฉีดฟิลเลอร์เพื่อเติมเต็มริ้วรอย และปรับรูปหน้าให้ดูอ่อนเยาว์และสมส่วน',
    price: '฿9,999',
    period: '/ซีซี',
    featureList: [
      'ฟิลเลอร์แท้จากแบรนด์ชั้นนำ',
      'ออกแบบรูปหน้าตามความต้องการ',
      'การดูแลหลังการฉีด',
    ],
    btnText: 'เริ่มต้นวันนี้',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'แพ็กเกจโบท็อกซ์',
    subTitle:
      'บริการฉีดโบท็อกซ์เพื่อลดริ้วรอยและปรับรูปหน้าให้เรียวกระชับอย่างเป็นธรรมชาติ',
    price: '฿8,000',
    period: '/ยูนิต',
    featureList: [
      'โบท็อกซ์แท้จากบริษัทชั้นนำ',
      'การออกแบบรูปหน้าด้วยโบท็อกซ์',
      'ดูแลหลังการฉีด',
    ],
    btnText: 'เริ่มต้นวันนี้',
    btnUrl: '/contact',
    popular: false,
  },
  {
    title: 'แพ็กเกจฉีดไขมัน',
    subTitle:
      'บริการฉีดไขมันเพื่อปรับรูปหน้าและเติมเต็มส่วนต่าง ๆ ที่ต้องการให้ดูสมส่วน',
    price: '฿25,000',
    period: '/ครั้ง',
    featureList: [
      'ปรึกษาแพทย์เฉพาะทาง',
      'ฉีดไขมันบริเวณใบหน้า',
      'การดูแลหลังการฉีดไขมัน',
    ],
    btnText: 'เริ่มต้นวันนี้',
    btnUrl: '/contact',
    popular: false,
  },
];

const faqData = [
  {
    title: 'บริการทำตาสองชั้นของเรามีอะไรบ้าง?',
    content:
      'เรามีบริการทำตาสองชั้น โดยแพทย์ผู้เชี่ยวชาญที่มีประสบการณ์สูง เพื่อให้ดวงตาดูสวยและเป็นธรรมชาติ การรักษาทำได้ทั้งการผ่าตัดแบบปกติและเทคนิคพิเศษ',
  },
  {
    title: 'ฉีดฟิลเลอร์ต้องเตรียมตัวอย่างไร?',
    content:
      'ก่อนการฉีดฟิลเลอร์ ควรปรึกษาแพทย์เพื่อตรวจสอบสภาพผิวและวางแผนการฉีดให้เหมาะสม นอกจากนี้ควรหลีกเลี่ยงการใช้ยาแอสไพรินหรือยาอื่น ๆ ที่มีผลต่อการแข็งตัวของเลือด',
  },
  {
    title: 'โบท็อกซ์สามารถช่วยอะไรได้บ้าง?',
    content:
      'การฉีดโบท็อกซ์สามารถช่วยลดริ้วรอยบนใบหน้า และยังสามารถใช้ในการปรับรูปหน้าให้เรียวและกระชับขึ้นได้',
  },
  {
    title: 'ต้องทำอย่างไรหลังจากฉีดไขมัน?',
    content:
      'หลังการฉีดไขมัน ควรหลีกเลี่ยงการนวดหรือกดบริเวณที่ฉีด และควรปฏิบัติตามคำแนะนำของแพทย์อย่างเคร่งครัดเพื่อให้ผลลัพธ์ที่ดีที่สุด',
  },
  {
    title: 'ต้องทำการจองคิวล่วงหน้าอย่างไร?',
    content:
      'คุณสามารถติดต่อเราเพื่อทำการจองคิวล่วงหน้าผ่านเว็บไซต์หรือโทรติดต่อโดยตรง เรายินดีให้บริการและจัดเวลาที่สะดวกที่สุดสำหรับคุณ',
  },
];

export default function PricingPlan() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/pricing_plan/banner_bg.svg"
        imgUrl={bannerImg}
        title="เลือกแพ็กเกจที่เหมาะสม <br>สำหรับคุณ"
        subTitle="สำรวจแพ็กเกจความงามของเราและเริ่มเส้นทางสู่ความสวยงามของคุณ"
        btnText="เริ่มต้นวันนี้"
        btnUrl="/contact"
      />
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <PricingSection
          sectionTitle="เลือกแพ็กเกจความงามที่ดีที่สุดสำหรับคุณ"
          data={pricingData}
        />
      </Section>
      <Section
        topMd={185}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
        className="cs_gray_bg_1"
      >
        <FaqSectionStyle4
          sectionTitle="คำถามที่พบบ่อย"
          data={faqData}
          faqImgUrl={faqImg}
          spiningImgUrl="/images/home_1/about_mini.svg"
        />
      </Section>
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        className="cs_footer_margin_0"
      >
        <BannerSectionStyle10
          imgUrl={bannerImgBtm}
          title="เลือกแพ็กเกจความงามและเริ่มลงทุนในความงามของคุณวันนี้!"
        />
      </Section>
    </>
  );
}
