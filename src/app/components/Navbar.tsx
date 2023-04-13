"use client";
import Image from "next/image";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { logo, resume } from "../assets";

const links = [
  {
    name: "Home",
    path: "",
  },
  {
    name: "About Me",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
];

interface NavbarProps {
  getLinkColor: (pathname: string, link: string) => string;
  handleLinkClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => void;
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
  pathName: string;
}

const Navbar = ({
  getLinkColor,
  handleLinkClick,
  setToggle,
  toggle,
  pathName,
}: NavbarProps) => {
  return (
    <nav className="flex flex-1 justify-between items-center max-w-[1440px] mx-auto px-12">
      <Image src={logo} alt="logo" width={45} height={45} />
      <ul className="justify-between gap-x-9 text-xs hidden sm:flex">
        {links.map((link, index) => (
          <li key={index} className={getLinkColor(pathName, link.path)}>
            <a onClick={(e) => handleLinkClick(e, link.path)} href={link.path}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="block sm:hidden">
        <HiMenuAlt4 className="-mr-2 h-14 w-14" onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            animate={{ x: [300, 0] }}
            transition={{ ease: "easeOut", duration: 0.85 }}
            className="fixed top-0 right-0 w-4/6 h-screen bg-secondary border-l-4 flex flex-col items-end justify-center shadow-xl"
          >
            <HiX className="w-10 h-10 m-7" onClick={() => setToggle(false)} />
            <ul className="w-full h-full flex flex-col gap-y-10 mt-4">
              {links.map((link, index) => (
                <li className="ml-12 text-lg" key={index}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      handleLinkClick(e, link.path);
                      setToggle(false);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <div className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md cursor-pointer flex justify-around w-4/6 ml-10 items-center">
                <Image src={resume} width={29} height={29} alt="resume" />
                <p className="text-white">Show me the Resume</p>
              </div>
            </ul>
          </motion.div>
        )}
      </div>
      <div className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md cursor-pointer hidden sm:flex">
        <Image src={resume} width={29} height={29} alt="resume" />
      </div>
    </nav>
  );
};

export default Navbar;
