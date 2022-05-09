import type { StaticImageData } from "next/image";

import { Project1Image } from "@/assets/projects";

export interface Project {
  title: string;
  description: string;
  url: string;
  img: StaticImageData;
  isBest: boolean;
}

const projectList: Project[] = [
  {
    title: "The Mafia Helper",
    description: "Web App and Telegram Bot to accompany the game mafia",
    url: "https://mafia-helper.vercel.app",
    img: Project1Image,
    isBest: true
  },
  {
    title: "The Mafia Helper",
    description: "Web App and Telegram Bot to accompany the game mafia",
    url: "https://mafia-helper.vercel.app",
    img: Project1Image,
    isBest: false
  },
  {
    title: "The Mafia Helper",
    description: "Web App and Telegram Bot to accompany the game mafia",
    url: "https://mafia-helper.vercel.app",
    img: Project1Image,
    isBest: true
  },
  {
    title: "The Mafia Helper",
    description: "Web App and Telegram Bot to accompany the game mafia",
    url: "https://mafia-helper.vercel.app",
    img: Project1Image,
    isBest: true
  }
];

export default projectList;
