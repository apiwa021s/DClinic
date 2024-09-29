import Section from "@/app/ui/Section";
import AwardSectionStyle2 from "@/app/ui/Section/AwardSection/AwardSectionStyle2";
import DepartmentSectionStyle2 from "@/app/ui/Section/DepartmentSection/DepartmentSectionStyle2";
import BannerSectionStyle3 from "@/app/ui/Section/BannerSection/BannerSectionStyle3";
import BannerSectionStyle4 from "@/app/ui/Section/BannerSection/BannerSectionStyle4";
import FeaturesSectionStyle2 from "@/app/ui/Section/FeaturesSection/FeaturesSectionStyle2";
import FunFactSection from "@/app/ui/Section/FunFactSection";
import GallerySection from "@/app/ui/Section/GallerySection";
import TeamSection from "@/app/ui/Section/TeamSection";

import bannerImg from '../../../../public/images/about/banner_img.png'
import whyChooseUsImg from '../../../../public//images/about/why_choose_us.jpeg'

const departmentData = [
  {
    title: 'ทำตาสองชั้น',
    subTitle: 'บริการทำตาสองชั้นเพื่อให้ดวงตาสวยคมและดูธรรมชาติ',
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
    iconUrl: '/images/icons/fat.svg',
    href: '/services/fat-injection',
  },
];

const featureListData = [
  {
    title: 'ทีมแพทย์ผู้เชี่ยวชาญ',
    subTitle: 'ทีมแพทย์ที่มีประสบการณ์สูงในด้านการเสริมความงามและการดูแลผิวพรรณ',
    iconUrl: '/images/icons/professional.svg',
  },
  {
    title: 'บริการครบวงจร',
    subTitle: 'เรามีบริการความงามหลากหลายทั้งผ่าตัดและไม่ผ่าตัดที่ตอบโจทย์ทุกความต้องการของคุณ',
    iconUrl: '/images/icons/comprehensive.svg',
  },
  {
    title: 'เทคโนโลยีทันสมัย',
    subTitle: 'ใช้เทคโนโลยีใหม่ล่าสุดในการให้บริการเพื่อความปลอดภัยและผลลัพธ์ที่ยอดเยี่ยม',
    iconUrl: '/images/icons/technology.svg',
  },
];

const funFactData = [
  { number: '10+', title: 'ปีแห่งประสบการณ์' },
  { number: '98%', title: 'ความพึงพอใจจากลูกค้า' },
  { number: '3000+', title: 'ลูกค้าที่ใช้บริการต่อปี' },
  { number: '5+', title: 'สถานที่ตั้งสะดวกสบาย' },
];

const teamData = [
  {
    imgUrl: '/images/about/doctor_1.png',
    name: 'คุณหมอจินตนา ศิริวงศ์',
    designation: 'ผู้เชี่ยวชาญด้านศัลยกรรมความงาม',
    description: 'ผู้เชี่ยวชาญในการทำศัลยกรรมและการดูแลผิวพรรณ',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
  {
    imgUrl: '/images/about/doctor_2.png',
    name: 'คุณหมออัญชลี พงศ์สุวรรณ',
    designation: 'ผู้เชี่ยวชาญด้านเลเซอร์และฟิลเลอร์',
    description: 'ผู้เชี่ยวชาญในการใช้เลเซอร์และการฉีดฟิลเลอร์เพื่อความงาม',
    social: [
      { icon: 'fa6-brands:facebook-f', href: '/about' },
      { icon: 'fa6-brands:linkedin-in', href: '/about' },
      { icon: 'fa6-brands:twitter', href: '/about' },
    ],
  },
];

const galleryData = [
  { imgUrl: '/images/about/portfolio_2_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_3_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_1_lg.jpeg' },
  { imgUrl: '/images/about/portfolio_4_lg.jpeg' },
];

const awardData = [
  {
    iconUrl: '/images/icons/award.svg',
    title: 'รางวัลคลินิกความงามยอดเยี่ยมแห่งปี',
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'การรับรองมาตรฐานจากกระทรวงสาธารณสุข',
  },
  {
    iconUrl: '/images/icons/award.svg',
    title: 'รางวัลคลินิกที่มีความปลอดภัยสูงสุด',
  },
];

export default function About() {
  return (
    <>
      <BannerSectionStyle3
        bgUrl="/images/about/banner_bg.svg"
        imgUrl={bannerImg}
        title="ยินดีต้อนรับสู่ <br />D Bangkok Clinic"
        subTitle="ผู้เชี่ยวชาญด้านความงามและการดูแลผิวพรรณ"
      />
      <Section topMd={200} topLg={150} topXl={110}>
        <DepartmentSectionStyle2
          sectionTitle="บริการความงามที่เรามี"
          sectionTitleUp="บริการของเรา"
          data={departmentData}
        />
      </Section>
      <Section topMd={175} topLg={125} topXl={85} bottomMd={100} bottomLg={110}>
        <FeaturesSectionStyle2
          sectionTitle="ทำไมถึงเลือกเรา"
          imgUrl={whyChooseUsImg}
          data={featureListData}
        />
      </Section>
      <Section>
        <FunFactSection
          bgUrl="/images/about/fun_fact_bg.jpeg"
          data={funFactData}
        />
      </Section>
      <Section topMd={190} topLg={145} topXl={105}>
        <TeamSection
          sectionTitle="ทีมแพทย์ผู้เชี่ยวชาญ"
          sectionTitleUp="พบกับทีม"
          data={teamData}
        />
      </Section>
      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="ดูสถานที่และ <br />กิจกรรมล่าสุดของเรา"
          sectionTitleUp="ดูเพิ่มเติมที่"
          data={galleryData}
        />
      </Section>
      <Section
        topMd={190}
        topLg={145}
        topXl={105}
        bottomMd={200}
        bottomLg={150}
        bottomXl={110}
      >
        <AwardSectionStyle2
          sectionTitle="รางวัลและ <br />การรับรอง"
          sectionTitleUp="ความภาคภูมิใจของเรา"
          sectionSubTitle="เรามีความภาคภูมิใจที่ได้รับการรับรองจากหลากหลายองค์กรที่มีชื่อเสียงในด้านการเสริมความงาม."
          data={awardData}
        />
      </Section>
      <Section className="cs_footer_margin_0">
        <BannerSectionStyle4
          bgUrl="/images/about/banner_bg_2.jpeg"
          title="เปลี่ยนตัวคุณ <br />ให้สวยยิ่งขึ้น!"
          subTitle="นัดหมายกับผู้เชี่ยวชาญด้านความงามของเราวันนี้!"
          center
        />
      </Section>
    </>
  );
}
