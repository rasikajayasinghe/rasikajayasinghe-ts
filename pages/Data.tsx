import { TbBrandCss3 } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoPython } from "react-icons/io";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeaudition } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMaterialui } from "react-icons/si";
import { SiLaravel } from "react-icons/si";
import { SiCodeigniter } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiMagento } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { TfiVideoClapper } from "react-icons/tfi";
import { RiSoundModuleLine } from "react-icons/ri";
import { SiArduino } from "react-icons/si";
import Work1 from "../assets/project-img/project1.jpg";
import Work2 from "../assets/project-img/project2.jpg";
import Work3 from "../assets/project-img/project3.jpg";
import Work4 from "../assets/project-img/project4.jpg";
import Work5 from "../assets/project-img/project5.jpg";
import Work6 from "../assets/project-img/project6.jpg";
import Style from "../styles/Skills.module.scss";
import ServicesStyle from "../styles/Services.module.scss";

export const FrontEndSkillsData = [
  {
    id: "1",
    icon: <TbBrandHtml5 className={Style.skill_logo} />,
    skillName: "HTML5",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <TbBrandCss3 className={Style.skill_logo} />,
    skillName: "CSS",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <TbBrandJavascript className={Style.skill_logo} />,
    skillName: "JavaScript",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <TbBrandReactNative className={Style.skill_logo} />,
    skillName: "React",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <DiJqueryLogo className={Style.skill_logo} />,
    skillName: "JQuery",
    skillLevel: "Intermediate",
  },
  {
    id: "6",
    icon: <TbBrandGithub className={Style.skill_logo} />,
    skillName: "Git",
    skillLevel: "Intermediate",
  },
];

export const BackEndSkillData = [
  {
    id: "1",
    icon: <DiPhp className={Style.skill_logo} />,
    skillName: "PHP",
    skillLevel: "Intermediate",
  },
  {
    id: "2",
    icon: <DiMysql className={Style.skill_logo} />,
    skillName: "MySql",
    skillLevel: "Intermediate",
  },
  {
    id: "3",
    icon: <DiNodejsSmall className={Style.skill_logo} />,
    skillName: "NodeJs",
    skillLevel: "Basic",
  },
  {
    id: "4",
    icon: <IoLogoPython className={Style.skill_logo} />,
    skillName: "Python",
    skillLevel: "Basic",
  },
];

export const designSkillsData = [
  {
    id: "1",
    icon: <SiAdobephotoshop className={Style.skill_logo} />,
    skillName: "Photoshop",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <SiAdobeillustrator className={Style.skill_logo} />,
    skillName: "Illustrator",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <SiFigma className={Style.skill_logo} />,
    skillName: "Figma",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <SiAdobepremierepro className={Style.skill_logo} />,
    skillName: "Premiere Pro",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <SiAdobeaftereffects className={Style.skill_logo} />,
    skillName: "After Effects",
    skillLevel: "Basic",
  },
  {
    id: "6",
    icon: <SiAdobeaudition className={Style.skill_logo} />,
    skillName: "Audition",
    skillLevel: "Intermediate",
  },
];

export const FrameWorksSkillsData = [
  {
    id: "1",
    icon: <SiBootstrap className={Style.skill_logo} />,
    skillName: "Bootstrap",
    skillLevel: "Advanced",
  },
  {
    id: "2",
    icon: <SiMaterialui className={Style.skill_logo} />,
    skillName: "Material UI",
    skillLevel: "Advanced",
  },
  {
    id: "3",
    icon: <SiLaravel className={Style.skill_logo} />,
    skillName: "Laravel",
    skillLevel: "Intermediate",
  },
  {
    id: "4",
    icon: <SiCodeigniter className={Style.skill_logo} />,
    skillName: "Codeigniter",
    skillLevel: "Intermediate",
  },
  {
    id: "5",
    icon: <SiReact className={Style.skill_logo} />,
    skillName: "ReactNative",
    skillLevel: "Intermediate",
  },
  {
    id: "6",
    icon: <SiFlutter className={Style.skill_logo} />,
    skillName: "Flutter",
    skillLevel: "Intermediate",
  },
  {
    id: "7",
    icon: <SiShopify className={Style.skill_logo} />,
    skillName: "Shopify",
    skillLevel: "Intermediate",
  },
  {
    id: "8",
    icon: <SiMagento className={Style.skill_logo} />,
    skillName: "Magento",
    skillLevel: "Advanced",
  },
];

export const servicesContentData = [
  {
    id: 1,
    icon: <FaCode className={ServicesStyle.services__icon} />,
    category: "Web",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 2,
    icon: <CgWebsite className={ServicesStyle.services__icon} />,
    category: "UI/UX",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing Business card" },
      { id: 3, title: "I designing logo" },
    ],
  },
  {
    id: 3,
    icon: <AiFillEdit className={ServicesStyle.services__icon} />,
    category: "Branding",
    serviceName: "Designing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 4,
    icon: <TfiVideoClapper className={ServicesStyle.services__icon} />,
    category: "Video",
    serviceName: "Editing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
      { id: 3, title: "I designing admin interface" },
    ],
  },
  {
    id: 5,
    icon: <RiSoundModuleLine className={ServicesStyle.services__icon} />,
    category: "Sound Track",
    serviceName: "Mixing",
    serviceList: [
      { id: 1, title: "I designing web interface" },
      { id: 2, title: "I designing App interface" },
    ],
  },
  {
    id: 6,
    icon: <SiArduino className={ServicesStyle.services__icon} />,
    category: "Arduino",
    serviceName: "Development",
    serviceList: [{ id: 1, title: "I making small robot and other project" }],
  },
];

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Web design",
    category: "web",
  },
  {
    id: 2,
    image: Work2,
    title: "App movil",
    category: "app",
  },
  {
    id: 3,
    image: Work3,
    title: "Brand design",
    category: "design",
  },
  {
    id: 4,
    image: Work4,
    title: "App design",
    category: "app",
  },
  {
    id: 5,
    image: Work5,
    title: "Web design",
    category: "web",
  },
  {
    id: 6,
    image: Work6,
    title: "Web design",
    category: "web",
  },
  {
    id: 7,
    image: Work6,
    title: "Web design",
    category: "design",
  },
];

export const projectsNav = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "web",
  },
  {
    id: 3,
    name: "app",
  },
  {
    id: 4,
    name: "design",
  },
];
