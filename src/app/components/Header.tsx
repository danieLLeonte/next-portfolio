"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { logo, resume } from "../assets";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const getLinkColor = (pathname: string, link: string) => {
  if (pathname === link) {
    return "text-textPrimary";
  }
};

const Header = () => {
  const pathname = usePathname();
  console.log("🚀 ~ file: Header.tsx:11 ~ Header ~ pathname:", pathname);

  return (
    <header className="flex justify-between items-center font-bold uppercase py-12">
      <Image src={logo} width={45} height={45} alt="logo" />
      <nav>
        <ul className="flex justify-between gap-x-9 text-xs">
          {links.map((link, index) => (
            <li key={index} className={getLinkColor(pathname, link.path)}>
              <Link href={link.path}>{link.name}</Link>
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
