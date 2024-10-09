"use client";
import Section from "@/app/ui/Section";
import AwardSectionStyle2 from "@/app/ui/Section/AwardSection/AwardSectionStyle2";
import DepartmentSectionStyle2 from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle2";
import BannerSectionStyle3 from "@/app/ui/Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "@/app/ui/Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle2 from "@/app/ui/Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "@/app/ui/Section/FunFactSection";
import GallerySection from "@/app/ui/Section/GallerySection";
import TeamSection from "@/app/ui/Section/TeamSection";

import bannerImg from '../../../../public/images/about/banner_img.png';
import whyChooseUsImg from '../../../../public//images/service/1.jpg';

const departmentData = [
  {
    title: 'ทำตาสองชั้น',
    subTitle: 'บริการทำตาสองชั้น เพื่อดวงตาที่สวยคมและดูธรรมชาติ',
    iconUrl: '/images/icons/eyelid.svg',
    href: '/services/double-eyelid',
  },
  {
    title: 'เลเซอร์ Oligio',
    subTitle: 'ยกกระชับผิวหน้าโดยไม่ต้องผ่าตัดด้วยเทคโนโลยีเลเซอร์ Oligio',
    iconUrl: '/images/icons/laser.svg',
    href: '/services/oligio-laser',
  },
  {
    title: 'ฟิลเลอร์',
    subTitle: 'เติมเต็มริ้วรอยและปรับรูปหน้าให้ดูเต็มอิ่มและอ่อนเยาว์',
    iconUrl: '/images/icons/filler.svg',
    href: '/services/filler',
  },
  {
    title: 'โบท็อกซ์',
    subTitle: 'ลดริ้วรอยและปรับรูปหน้าให้ดูเรียวกระชับและอ่อนเยาว์',
    iconUrl: '/images/icons/botox.svg',
    href: '/services/botox',
  },
  {
    title: 'ฉีดไขมัน',
    subTitle: 'ปรับรูปหน้าและลดเหนียงด้วยการฉีดไขมัน',
    iconUrl: '/images/icons/fat-injection.svg',
    href: '/services/fat-injection',
  },
];

const featureListData = [
  {
    title: 'ทีมแพทย์ผู้เชี่ยวชาญ',
    subTitle:
      'ทีมแพทย์ที่มีประสบการณ์สูงในด้านการเสริมความงามและการดูแลผิวพรรณ พร้อมให้บริการที่ดีที่สุดสำหรับคุณ',
    iconUrl: '/images/icons/professional.svg',
  },
  {
    title: 'บริการครบวงจร',
    subTitle:
      'เรามีบริการหลากหลาย ไม่ว่าจะเป็นการเสริมความงามด้วยการผ่าตัด หรือไม่ผ่าตัด',
    iconUrl: '/images/icons/comprehensive.svg',
  },
  {
    title: 'เทคโนโลยีทันสมัย',
    subTitle:
      'เราใช้เทคโนโลยีล่าสุดในการดูแลผิวพรรณและความงามเพื่อผลลัพธ์ที่ดีที่สุด',
    iconUrl: '/images/icons/comprehensive.svg',
  },
  {
    title: 'บริการที่ใส่ใจลูกค้า',
    subTitle:
      'เราให้บริการที่เป็นมิตรและใส่ใจทุกรายละเอียด เพื่อความพึงพอใจของลูกค้าทุกคน',
    iconUrl: '/images/icons/comprehensive.svg',
  },
];

const teamData = [
  {
    imgUrl: '/images/service/6.jpg',
    name: 'คุณหมอเป็นเอก ธงทอง',
    designation: 'ผู้เชี่ยวชาญด้านศัลยกรรมความงาม',
    description: 'มีประสบการณ์ในการทำศัลยกรรมและดูแลผิวพรรณมามากกว่า 10 ปี',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: '/images/service/7.jpg',
    name: 'คุณหมอเป็นหนึ่ง ธงทอง',
    designation: 'ผู้เชี่ยวชาญด้านเลเซอร์และฟิลเลอร์',
    description: 'เชี่ยวชาญในการใช้เลเซอร์และการฉีดฟิลเลอร์เพื่อความงาม',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: '/images/service/8.jpg',
    name: 'คุณหมอเป็นเลิศ ธงทอง',
    designation: 'ผู้เชี่ยวชาญด้านการปรับรูปหน้า',
    description: 'มีประสบการณ์ในการปรับรูปหน้าให้สมส่วนและสวยงามตามธรรมชาติ',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];

const galleryData = [
  { imgUrl: '/images/about/portfolio_1_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_2_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_3_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_4_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_5_lg.jpeg' },
];

export default function About() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl={bannerImg}
        title="ยินดีต้อนรับสู่ <br />D Bangkok Clinic"
        subTitle="ผู้เชี่ยวชาญด้านความงามและการดูแลผิวพรรณ"
      />

      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="ทำไมถึงเลือกเรา"
          imgUrl={whyChooseUsImg}
          data={featureListData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="ทีมแพทย์ผู้เชี่ยวชาญ"
          sectionTitleUp="พบกับทีมของเรา"
          data={teamData}
        />
      </Section>
      {/* <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="ผลงานและกิจกรรมล่าสุดของเรา"
          sectionTitleUp="ดูเพิ่มเติม"
          data={galleryData}
        />
      </Section> */}
      {/* <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="รางวัลและการรับรอง"
          sectionTitleUp="ความสำเร็จของเรา"
          sectionSubTitle="เราได้รับการยอมรับและรับรองจากองค์กรชั้นนำในด้านความงาม"
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/about/banner_bg_2.jpeg"
          title="เปลี่ยนคุณให้สวยยิ่งขึ้นกับเรา!"
          subTitle="นัดหมายเพื่อรับคำปรึกษาจากผู้เชี่ยวชาญด้านความงามของเราวันนี้!"
          center
        />
      </Section> */}
    </>
  );
}
