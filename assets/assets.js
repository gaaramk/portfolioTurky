// ✅ Images & Icons from assets (import)
import user_image from "../assets/user-image.jpg";
import hand_icon from "../assets/hand-icon.png";
import send_icon from "../assets/send-icon.png";

import vscode from "../assets/vscode.png";
import figma from "../assets/figma.png";
import mongodb from "../assets/mongodb.png";
import illustrator from "../assets/Illustrator.png";
import photoshop from "../assets/photoshop.png";

import web_icon from "../assets/web-icon.png";
import mobile_icon from "../assets/mobile-icon.png";
import ui_icon from "../assets/ui-icon.png";
import graphics_icon from "../assets/graphics-icon.png";

import edu_icon from "../assets/edu-icon.png";
import edu_icon_dark from "../assets/edu-icon-dark.png";
import code_icon from "../assets/code-icon.png";
import code_icon_dark from "../assets/code-icon-dark.png";
import project_icon from "../assets/project-icon.png";
import project_icon_dark from "../assets/project-icon-dark.png";

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

// ✅ Work Section Data (صور من public)
export const workData = [
  {
    title: "Palestine",
    description: "Palestine design",
    bgImage: "/work3.png", // public/work3.png
  },
  {
    title: "Strawberry",
    description: "Strawberry design",
    bgImage: "/work5.png",
  },
  {
    title: "7 Of October",
    description: "the 7 of october",
    bgImage: "/work4.png",
  },
  {
    title: "Febreze",
    description: "Febreze design",
    bgImage: "/work1.jpg",
  },
];

// ✅ Services Section Data
export const serviceData = [
  {
    icon: assets.graphics_icon,
    title: "Graphics Design",
    description:
      "Creative design solutions for visual communication and branding.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.mobile_icon,
    title: "Branding Specialist",
    description:
      "Building brand identity systems and visual consistency across media.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX Design",
    description:
      "Designing intuitive and elegant user interfaces and experiences.",
    link: "https://www.behance.net/abdosdfmohamed",
  },
  {
    icon: assets.web_icon,
    title: "Visual Storytelling",
    description:
      "Transforming ideas into impactful visual narratives and presentations.",
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
export const toolsData = [assets.photoshop, assets.illustrator, assets.figma];
