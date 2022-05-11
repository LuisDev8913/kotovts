import type { StaticImageData } from "next/image";

import { Project1Image } from "@/assets/projects";

export interface Project {
  title: {
    en: string;
    uk: string;
  };
  description: {
    en: string;
    uk: string;
  };
  url: string;
  img: StaticImageData;
  isBest: boolean;
}

const projectList: Project[] = [
  {
    title: {
      en: "The Mafia Helper",
      uk: "The Mafia Helper"
    },
    description: {
      en: "Web App and Telegram Bot to accompany the game mafia",
      uk: "Веб-додаток і бот Telegram для супроводу гри Мафія"
    },
    url: "https://mafia-helper.vercel.app",
    img: Project1Image,
    isBest: true
  }
];

export default projectList;
