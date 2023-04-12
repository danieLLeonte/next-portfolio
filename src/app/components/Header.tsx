"use client";
import { useEffect, useState } from "react";
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

const getLinkColor = (pathname: string, link: string) =>
  pathname === link ? "text-textPrimary" : "text-textSecondary";

const Header = () => {
  const [pathName, setPathName] = useState<string>(window.location.hash);
  const [shadow, setShadow] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (link === "") {
      e.preventDefault();
      window.scrollTo({ top: 0 });
      window.history.pushState({}, "", "/");
    }
    setPathName(link);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 60) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);

    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <header
      className={`ease-in-out duration-300 font-bold uppercase h-20 mb-24 sticky inset-0 z-50 flex items-center backdrop-blur-lg bg-secondary/50 ${
        shadow ? "shadow-xl pt-1" : "pt-4"
      }`}
    >
      <div className="flex flex-1 justify-between items-center max-w-[1440px] mx-auto px-12">
        <Image src={logo} alt="logo" width={45} height={45} />
        <nav>
          <ul className="justify-between gap-x-9 text-xs hidden sm:flex">
            {links.map((link, index) => (
              <li key={index} className={getLinkColor(pathName, link.path)}>
                <a
                  onClick={(e) => handleLinkClick(e, link.path)}
                  href={link.path}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="block sm:hidden">
            <HiMenuAlt4 className="h-14 w-14" onClick={() => setToggle(true)} />

            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
                className="fixed top-0 right-0 w-4/6 h-screen bg-secondary border-l-4 flex flex-col items-end justify-center shadow-xl"
              >
                <HiX
                  className="w-10 h-10 m-7"
                  onClick={() => setToggle(false)}
                />
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
                </ul>
              </motion.div>
            )}
          </div>
        </nav>
        <div className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md cursor-pointer hidden sm:flex">
          <Image src={resume} width={29} height={29} alt="resume" />
        </div>
      </div>
    </header>
  );
};

export default Header;
