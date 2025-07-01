// ✅ Images
import user_image from "./user-image.jpg";
import hand_icon from "./hand-icon.png";
import send_icon from "./send-icon.png";

// ✅ Tool Icons
import vscode from "./vscode.png";
import figma from "./figma.png";
import mongodb from "./mongodb.png";
import illustrator from "./Illustrator.png";
import photoshop from "./photoshop.png";

// ✅ Service Icons
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";

// ✅ Info Icons
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";

// ✅ Centralized Assets
export const assets = {
  user_image,
  hand_icon,
  send_icon,
  vscode,
  figma,
  mongodb,
  illustrator,
  photoshop,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  edu_icon,
  edu_icon_dark,
  code_icon,
  code_icon_dark,
  project_icon,
  project_icon_dark,
};

// ✅ Work Section Data
export const workData = [
  {
    title: "Palestine",
    description: "Palestine design",
    bgImage: "/portfolioTurky/work3.png",
  },
  {
    title: "Strawberry",
    description: "Strawberry design",
    bgImage: "/portfolioTurky/work5.png",
  },
  {
    title: "7 Of October",
    description: "the 7 of october",
    bgImage: "/portfolioTurky/work4.png",
  },
  {
    title: "Febreze",
    description: "Febreze design",
    bgImage: "/portfolioTurky/work1.jpg",
  },
];

// ✅ Services Section Data
export const serviceData = [
  {
    icon: assets.graphics_icon,
    title: "Graphics Design",
    description: "Creative design solutions for visual communication and branding.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.mobile_icon,
    title: "Branding Specialist",
    description: "Building brand identity systems and visual consistency across media.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Design",
    description: "Designing intuitive and elegant user interfaces and experiences.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.web_icon,
    title: "Visual Storytelling",
    description: "Transforming ideas into impactful visual narratives and presentations.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
];

// ✅ About Me Info Boxes
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Tools",
    description: "Photoshop, Illustrator, Figma, VS Code, Framer Motion",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 creative design projects",
  },
];

// ✅ Tools Used Logos
export const toolsData = [
  assets.photoshop,
  assets.illustrator,
  assets.figma,
];
