import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

interface SocialLinksProps {
  gmail: string;
  linkedin: string;
  github: string;
}

const SocialLinks = ({ gmail, linkedin, github }: SocialLinksProps) => {
  return (
    <div className="flex justify-between gap-x-10">
      <Link href={`mailto:${gmail}`}>
        <AiFillMail className="icon" size={23} />
      </Link>
      <Link href={`${linkedin}`} target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin className="icon" size={23} />
      </Link>
      <Link href={`${github}`} target="_blank" rel="noopener noreferrer">
        <AiFillGithub className="icon" size={23} />
      </Link>
    </div>
  );
};

export default SocialLinks;
