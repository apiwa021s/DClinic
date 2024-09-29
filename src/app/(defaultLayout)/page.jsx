'use client';
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../ui/Section';
import FeaturesSection from '../ui/Section/FeaturesSection';
import AboutSection from '../ui/Section/AboutSection';
import DepartmentSection from '../ui/Section/DepartmentSection';
import AwardSection from '../ui/Section/AwardSection';
import TestimonialSection from '../ui/Section/TestimonialSection';
import Banner from '../ui/Section/BannerSection';
import BlogSection from '../ui/Section/BlogSection';
import AppointmentSection from '../ui/Section/AppointmentSection';
import FaqSection from '../ui/Section/FaqSection';
import BrandsSection from '../ui/Section/BrandsSection';
// Large Images for blur placeholder
import heroImage from '../../../public/images/home_1/hero_img.png';
import aboutImage from '../../../public/images/home_1/about.png';
import bannerImg from '../../../public/images/home_1/cta_img.png';
import appointmentImg from '../../../public/images/home_1/appointment.jpeg';

const featureListData = [
  {
    iconSrc: '/images/home_1/double-eyelid.svg',
    title: 'ทำตาสองชั้น ปรับกล้ามเนื้อตา',
    subTitle: 'บริการทำตาสองชั้นและปรับกล้ามเนื้อตา ให้ดวงตาสวย คมชัด ดูธรรมชาติ เหมาะกับใบหน้า.',
  },
  {
    iconSrc: '/images/home_1/oligio-laser.svg',
    title: 'Laser Oligio',
    subTitle: 'นวัตกรรมการยกกระชับผิวด้วยเลเซอร์ Oligio ช่วยให้ผิวหน้าเต่งตึง ดูอ่อนเยาว์.',
  },
  {
    iconSrc: '/images/home_1/filler.svg',
    title: 'Filler',
    subTitle: 'ฟิลเลอร์ช่วยเติมเต็มผิว ลดริ้วรอย เพิ่มความอิ่มเอิบให้ใบหน้า ดูเป็นธรรมชาติ.',
  },
  {
    iconSrc: '/images/home_1/botox.svg',
    title: 'Botox',
    subTitle: 'การฉีดโบท็อกซ์ช่วยลดริ้วรอยและปรับรูปหน้าให้ดูเรียว กระชับและอ่อนวัย.',
  },
  {
    iconSrc: '/images/home_1/fat-injection.svg',
    title: 'ฉีดไขมัน ลดเหนียง',
    subTitle: 'ฉีดไขมันเพื่อปรับรูปหน้าและลดเหนียง ช่วยให้ใบหน้าดูชัดและกระชับขึ้น.',
  },
  {
    iconSrc: '/images/home_1/facial-massage.svg',
    title: 'นวดหน้า',
    subTitle: 'บริการนวดหน้าช่วยผ่อนคลายกล้ามเนื้อและกระตุ้นการไหลเวียนโลหิต ให้ผิวหน้าสดใส.',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_8.png', imgAlt: 'Brand' },
];
const faqData = [
  {
    title: 'D Bangkok Clinic มีบริการอะไรบ้าง?',
    content:
      'D Bangkok Clinic ให้บริการหลากหลายด้านความงาม เช่น การทำตาสองชั้น เลเซอร์ Oligio ฟิลเลอร์ โบท็อกซ์ และการฉีดไขมันเพื่อลดเหนียง เราใช้เทคโนโลยีที่ทันสมัยและปลอดภัยในทุกขั้นตอน.',
  },
  {
    title: 'ฉันจะทำการนัดหมายได้อย่างไร?',
    content:
      'คุณสามารถทำการนัดหมายผ่านทางเว็บไซต์ หรือโทรติดต่อที่เบอร์โทรของ D Bangkok Clinic เรามีทีมงานพร้อมให้บริการและแนะนำตารางเวลาที่เหมาะสมกับคุณ.',
  },
  {
    title: 'D Bangkok Clinic รับประกันสุขภาพหรือไม่?',
    content:
      'D Bangkok Clinic ยอมรับการชำระเงินด้วยเงินสดและบัตรเครดิต สำหรับข้อมูลเกี่ยวกับการประกันสุขภาพ กรุณาติดต่อคลินิกเพื่อสอบถามเพิ่มเติม.',
  },
  {
    title: 'ควรเตรียมตัวอย่างไรก่อนเข้ารับบริการ?',
    content:
      'กรุณานำบัตรประชาชนและข้อมูลทางการแพทย์ที่เกี่ยวข้องมาด้วย หากคุณมีอาการแพ้หรือกำลังใช้ยารักษา กรุณาแจ้งทีมแพทย์ก่อนรับบริการ.',
  },
  {
    title: 'ฉันจะขอรับยาหรือเวชภัณฑ์เพิ่มเติมได้อย่างไร?',
    content:
      'หากคุณต้องการยาหรือเวชภัณฑ์เพิ่มเติม กรุณาติดต่อคลินิกเพื่อทำการนัดหมายหรือปรึกษาแพทย์เกี่ยวกับการต่ออายุยาหรือรับคำแนะนำเพิ่มเติม.',
  },
];

const blogData = [
  {
    title:
      'ทำศัลยกรรม อายุเท่าไหร่ ? ตอบข้อสงสัยของวัยรุ่นที่อยากทำศัลยกรรม พร้อมข้อควรรู้ก่อนตัดสินใจ',
    thumbUrl: '/images/blog/post_1.jpeg',
    date: 'March 12',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: `การทำตาสองชั้นนอกจากจะช่วยเรื่องความสวยงามแล้ว ยังสามารถแก้ปัญหาดวงตาได้อีกด้วย ทำตาสองชั้นปัจจุบันมีข้อดี ข้อเสียยังไง มาดูกันเลย`,
    thumbUrl: '/images/blog/post_2.jpeg',
    date: 'March 11',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'ยกคิ้วแบบไม่ต้องพักฟื้น ด้วยเทคนิค ‘Direct Brow lifting’',
    thumbUrl: '/images/blog/post_3.jpeg',
    date: 'March 9',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const awardData = [
  {
    title: 'Malcolm Baldrige National Quality Award',
    subTitle:
      'This award recognizes healthcare organizations that have demonstrated excellence in leadership, strategic planning, customer and employee satisfaction, and operational efficiency.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'HIMSS Davies Award',
    subTitle:
      'This award recognizes healthcare organizations that have used health information technology to improve patient outcomes and reduce costs.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'Healthgrades National’s Best Hospital',
    subTitle:
      'This recognition is given to hospitals that have achieved high ratings for clinical quality and patient safety across multiple specialties and procedures.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'Joint Commission Gold Seal of Approval',
    subTitle:
      'This recognition is given to hospitals that have met rigorous standards for patient safety and quality of care.',
    iconUrl: '/images/icons/award.svg',
  },
];
const departmentData = [
  {
    title: 'โปรทำตาสองชั้น ลด 20%',
    iconUrl: '/images/home_1/double_eyelid.svg',
    href: '/promotions/double-eyelid',
  },
  {
    title: 'เลเซอร์ Oligio ยกกระชับ ลด 15%',
    iconUrl: '/images/home_1/oligio_laser.svg',
    href: '/promotions/oligio-laser',
  },
  {
    title: 'ฟิลเลอร์ แก้ม/ปาก เริ่มต้นเพียง 9,999 บาท',
    iconUrl: '/images/home_1/filler.svg',
    href: '/promotions/filler',
  },
  {
    title: 'โบท็อกซ์ ลดริ้วรอย 10 จุด เริ่มต้นที่ 12,000 บาท',
    iconUrl: '/images/home_1/botox.svg',
    href: '/promotions/botox',
  },
  {
    title: 'ฉีดไขมัน ลดเหนียง พิเศษ 25,000 บาท',
    iconUrl: '/images/home_1/fat_injection.svg',
    href: '/promotions/fat-injection',
  },
  {
    title: 'ทรีทเม้นต์บำรุงผิวหน้า ซื้อ 1 แถม 1',
    iconUrl: '/images/home_1/facial_treatment.svg',
    href: '/promotions/facial-treatment',
  },
];



export default function Home() {
  return (
    <>

      <Hero
        title="D Bangkok Clinic"
        subTitle="ยินดีต้อนรับสู่ ดีแบ็งค็อกคลินิกเวชกรรม คลินิกความงามย่านทองหล่อ ใกล้กับ BTS ทองหล่อ ทางออก 3 เราพร้อมให้บริการเสริมความสวยงามหลากหลาย ด้วยทีมแพทย์ผู้เชี่ยวชาญ"
        bgUrl="/images/home_1/hero_bg.jpg"
        imgUrl={heroImage}
        infoList={[
          {
            title: 'โทร',
            subTitle: '0616479191',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Line',
            subTitle: '@dbankgogclinic',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: ' BTS ทองหล่อ ทางออก 3',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="จองเลย"
        btnUrl="/appointments"
      />

      {/* Start Feature Section */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="บริการของเรา" data={featureListData} />
      </Section>
      {/* End Feature Section */}

      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl={aboutImage}
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="เกี่ยวกับเรา"
          subTitle="D Bangkok Clinic"
          featureList={[
            {
              featureListTitle:
                'D Bangkok Clinic - คลินิกความงามที่คุณวางใจ',
              featureListSubTitle:
                'เราเป็นคลินิกความงามที่ตั้งอยู่ในย่านทองหล่อ พร้อมทีมแพทย์ผู้เชี่ยวชาญที่มีประสบการณ์สูง เรามุ่งมั่นที่จะให้บริการด้วยความเอาใจใส่ และใช้เทคโนโลยีที่ทันสมัยที่สุดเพื่อตอบสนองความต้องการของลูกค้าทุกท่าน.',
            },
            {
              featureListTitle:
                'บริการที่หลากหลายและครอบคลุมทุกความต้องการ',
              featureListSubTitle:
                'เรามีบริการเสริมความงามที่ครอบคลุม ไม่ว่าจะเป็นการทำตาสองชั้น การใช้เลเซอร์ในการยกกระชับผิว ฟิลเลอร์ โบท็อกซ์ และการฉีดไขมันเพื่อลดเหนียง เรามั่นใจว่าทุกบริการของเราจะช่วยเสริมความงามและเพิ่มความมั่นใจให้กับคุณ.',
            },
          ]}
        />
      </Section>

      {/* End About Section */}

      {/* Start Departments Section */}
      <Section topMd={185} topLg={150} topXl={110}>
  <DepartmentSection
    sectionTitle="โปรเสริมความงาม"
    bgUrl="/images/home_1/department_bg.svg"
    data={departmentData}
  />
</Section>

      {/* End Departments Section */}

      {/* Start Award Section */}
      <Section topMd={185} topLg={140} topXl={100}>
        <AwardSection sectionTitle="Departments" data={awardData} />
      </Section>
      {/* End Award Section */}

      {/* Start Testimonial */}
      <Section
        topMd={185}
        topLg={140}
        topXl={100}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <TestimonialSection
          sectionTitle="Some Reviews"
          sectionTitleDown="Of our clients"
        />
      </Section>
      {/* End Testimonial */}

      {/* Start Banner Section */}
      <Section>
        <Banner
          bgUrl="/images/home_1/cta_bg.svg"
          imgUrl={bannerImg}
          title="Don’t Let Your Health Take a Backseat!"
          subTitle="Schedule an appointment with one of our experienced medical professionals today!"
        />
      </Section>
      {/* End Banner Section */}

      {/* Start Blog Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <BlogSection
          sectionTitle="Latest Update"
          sectionTitleUp="BLOG POSTS"
          data={blogData}
        />
      </Section>
      {/* End Blog Section */}

      {/* Start Appointment Section */}
      {/* <Section topMd={190} topLg={145} topXl={105} id="appointment">
        <AppointmentSection
          sectionTitle="Appointment"
          sectionTitleUp="BOOK AN"
          imgUrl={appointmentImg}
        />
      </Section> */}
      {/* End Appointment Section */}

      {/* Start FAQ Section */}
      <Section topMd={190} topLg={145} topXl={105}>
        <FaqSection
          data={faqData}
          sectionTitle="คำถามที่พบบ่อย"
          sectionTitleUp="ลูกค้าสอบถามบ่อย"
        />
      </Section>

      {/* End FAQ Section */}

      {/* Start Brand Section */}
      <Section
        topMd={200}
        topLg={150}
        topXl={110}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <BrandsSection data={brandData} />
      </Section>
      {/* End Brand Section */}
    </>
  );
}
