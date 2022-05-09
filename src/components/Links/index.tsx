import { Link } from "@/data/links";

interface Props {
  links: Link[];
}

const Links: React.FC<Props> = ({ links }) => (
  <>
    {links.map((link, i) => (
      <a key={i} href={link.url} target='_blank' rel='noreferrer'>
        <span className='sr-only'>{link.title}</span>
        {link.icon}
      </a>
    ))}
  </>
);

export default Links;
