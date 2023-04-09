"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      className={`font-bold uppercase h-20 mt-4 mb-24 sticky inset-0 z-50 flex items-center backdrop-blur-lg bg-secondary/50 ${
        shadow && "shadow-xl ease-in-out duration-300"
      }`}
    >
      <div className="flex flex-1 justify-between items-center max-w-[1440px] mx-auto px-12">
        <Image src={logo} alt="logo" width={45} height={45} />
        <nav>
          <ul className="flex justify-between gap-x-9 text-xs">
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
        </nav>
        <div className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md cursor-pointer">
          <Image src={resume} width={29} height={29} alt="resume" />
        </div>
      </div>
    </header>
  );
};

export default Header;
