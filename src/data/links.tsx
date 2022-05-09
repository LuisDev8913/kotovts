import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon
} from "@/assets/svg";

export interface Link {
  title: string;
  url: string;
  icon: JSX.Element;
}

const links: Link[] = [
  {
    title: "github",
    url: "https://github.com/apostlekotov",
    icon: <GithubIcon className='social-icon' />
  },
  {
    title: "linkedin",
    url: "https://linkedin.com/in/apostlekotov",
    icon: <LinkedInIcon className='social-icon' />
  },
  {
    title: "telegram",
    url: "https://t.me/apostlekotov",
    icon: <TelegramIcon className='social-icon' />
  },
  {
    title: "instagram",
    url: "https://instagram.com/kotov.ts",
    icon: <InstagramIcon className='social-icon' />
  }
];

export default links;
