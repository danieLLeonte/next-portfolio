import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const SocialLinks = () => {
  return (
    <div className="flex justify-between gap-x-10">
      <AiFillMail className="icon" size={23} />
      <AiFillLinkedin className="icon" size={23} />
      <AiFillGithub className="icon" size={23} />
    </div>
  );
};

export default SocialLinks;
