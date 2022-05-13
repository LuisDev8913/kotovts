import type { StaticImageData } from "next/image";

import ProjectImages from "@/assets/projects";

export interface Project {
  title: string;
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
    title: "The Mafia Helper",
    description: {
      en: "Web App (React.js) and Telegram Bot to accompany the game mafia",
      uk: "Веб-додаток і бот Telegram для супроводу гри Мафія"
    },
    url: "https://mafia-helper.vercel.app",
    img: ProjectImages.MafiaHelper,
    isBest: true
  },
  {
    title: "UNFT - Demo",
    description: {
      en: "DAPP project to demonstrate work with Ethers.js and Metamask",
      uk: "DAPP проект для демонтрації роботи з Ethers.js та Metamask"
    },
    url: "https://unft-demo.vercel.app",
    img: ProjectImages.UNFT,
    isBest: true
  },
  {
    title: "Triplex digital",
    description: {
      en: "UI and website (Next.js app + Strapi) for Swedish IT company",
      uk: "Дизайн та вебсайт (Next.js app + Strapi) для IT-компанії в Швеції"
    },
    url: "https://triplex.digital",
    img: ProjectImages.Triplex,
    isBest: false
  },
  {
    title: "Sedam Market",
    description: {
      en: "Website (MERN app) of a network of grocery stores + Telegram Bot as administration panel",
      uk: "Вебсайт (MERN app) мережі продуктових магазинів + адмін-панель в Telegram боті"
    },
    url: "https://sedam.com.ua",
    img: ProjectImages.Sedam,
    isBest: true
  },
  {
    title: "Limity",
    description: {
      en: "UI for auction website",
      uk: "Дизайн для вебсайту аукціону"
    },
    url: "https://dribbble.com/shots/14158425-Limity-UI?utm_source=Clipboard_Shot&utm_campaign=apostlekotov&utm_content=Limity%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=apostlekotov&utm_content=Limity%20UI&utm_medium=Social_Share",
    img: ProjectImages.Limity,
    isBest: true
  },
  {
    title: "SmartArt Center",
    description: {
      en: "UI and website (MERN app) for private kindergarten",
      uk: "Дизайн та вебсайт (MERN app) для приватного дитсадка"
    },
    url: "https://dribbble.com/shots/14127687-SmartArt-Center-UI?utm_source=Clipboard_Shot&utm_campaign=apostlekotov&utm_content=SmartArt%20Center%20UI&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=apostlekotov&utm_content=SmartArt%20Center%20UI&utm_medium=Social_Share",
    img: ProjectImages.SmartArt,
    isBest: false
  }
];

export default projectList;
