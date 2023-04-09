"use client";
import { useState } from "react";
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

const getLinkColor = (pathname: string, link: string) => {
  if (pathname === link) {
    return "text-textPrimary";
  }
};

const Header = () => {
  const [pathName, setPathName] = useState<string>(window.location.hash);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === "") {
      e.preventDefault();
      window.scrollTo({ top: 0 });
      window.history.pushState({}, "", "/");
    }
    setPathName(link);
  };

  return (
    <header className="flex justify-between items-center font-bold uppercase py-12 sticky top-0 z-50 border-b-2 bg-white">
      <Image src={logo} alt="logo" width={45} height={45} />
      <nav>
        <ul className="flex justify-between gap-x-9 text-xs">
          {links.map((link, index) => (
            <li key={index} className={getLinkColor(pathName, link.path)}>
              <a onClick={(e) => handleLinkClick(e, link.path)} href={link.path}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md cursor-pointer">
        <Image src={resume} width={29} height={29} alt="resume" />
      </div>
    </header>
  );
};

export default Header;
