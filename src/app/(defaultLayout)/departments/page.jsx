import React from 'react';
import Section from '@/app/ui/Section';
import BannerSectionStyle5 from '@/app/ui/Section/BannerSection/BannerSectionStyle5';
import BannerSectionStyle6 from '@/app/ui/Section/BannerSection/BannerSectionStyle6';
import DepartmentSectionStyle3 from '@/app/ui/Section/DepartmentSection/DepartmentSectionStyle3';

import bannerImg from '../../../../public/images/departments/banner_img.png';
import bannerImg2 from '../../../../public/images/departments/banner_img_2.png';

const departmentData = [
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'ทำตาสองชั้น',
    subTitle:
      'บริการทำตาสองชั้น เพื่อดวงตาที่ดูคมชัดและสวยงามตามธรรมชาติ',
    href: '/services/double-eyelid',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'ฟิลเลอร์',
    subTitle:
      'เติมเต็มริ้วรอย ปรับรูปหน้าให้ดูอ่อนเยาว์และสวยงาม',
    href: '/services/filler',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'โบท็อกซ์',
    subTitle:
      'ลดริ้วรอยและปรับรูปหน้าให้เรียวกระชับ ดูอ่อนเยาว์และสวยงาม',
    href: '/services/botox',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'เลเซอร์ Oligio',
    subTitle:
      'ยกกระชับผิวหน้าและลดริ้วรอยโดยไม่ต้องผ่าตัด ด้วยเทคโนโลยีเลเซอร์ Oligio',
    href: '/services/oligio-laser',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'ฉีดไขมัน',
    subTitle:
      'บริการฉีดไขมันเพื่อปรับรูปหน้าและลดเหนียงอย่างเห็นผล',
    href: '/services/fat-injection',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'นวดหน้า',
    subTitle:
      'บริการนวดหน้าสำหรับการผ่อนคลายและฟื้นฟูผิวหน้า',
    href: '/services/facial-massage',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'การดูแลผิวพรรณ',
    subTitle:
      'บริการดูแลผิวพรรณที่หลากหลาย เพื่อความสวยงามและสุขภาพผิวที่ดี',
    href: '/services/skin-care',
  },
  {
    iconUrl: '/images/departments/icon_1.svg',
    title: 'ยกกระชับใบหน้า',
    subTitle:
      'บริการยกกระชับใบหน้าเพื่อความสวยงาม ดูอ่อนเยาว์ และปรับรูปหน้าให้ได้สัดส่วน',
    href: '/services/facial-lifting',
  },
];

export default function Services() {
  return (
    <>
      <BannerSectionStyle5
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl={bannerImg}
        title="บริการเสริมความงามของเรา"
        subTitle="ที่ D Bangkok Clinic เรามีบริการเสริมความงามที่ครอบคลุมทุกความต้องการของคุณ เพื่อให้คุณสวยและมั่นใจมากขึ้น"
      />
      <Section bottomMd={140} bottomLg={100} bottomXl={60}>
        <DepartmentSectionStyle3 data={departmentData} />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle6
          imgUrl={bannerImg2}
          title="อย่ารอช้า ให้เราดูแลความงามของคุณ!"
          subTitle="นัดหมายเพื่อรับบริการจากผู้เชี่ยวชาญด้านความงามของเราวันนี้!"
        />
      </Section>
    </>
  );
}
