"use client";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { logo } from "../assets";
import { links } from "../constants";
import { navItemVariants, navListVariants, navVariants } from "../utils/motion";
interface NavbarProps {
  getLinkColor: (pathname: string, link: string) => string;
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
  pathName: string;
  setPathName: (pathName: string) => void;
}

const Navbar = ({
  getLinkColor,
  setToggle,
  toggle,
  pathName,
  setPathName,
}: NavbarProps) => {
  return (
    <nav className="flex flex-1 justify-between items-center max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24">
      <div className="w-[123px]">
        <Link
          className="w-[45px] h-[45px] block"
          onClick={() => setPathName("")}
          href={""}
        >
          <Image src={logo} alt="logo" width={45} height={45} />
        </Link>
      </div>
      {/* </div> */}
      <ul className="justify-between gap-x-9 text-xs hidden md:flex">
        {links.map((link, index) => (
          <li key={index} className={getLinkColor(pathName, link.path)}>
            <Link onClick={() => setPathName(link.path)} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="block md:hidden">
        <BiMenuAltRight
          className="-mr-2 h-14 w-14 text-black cursor-pointer"
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <motion.div
            animate="animate"
            variants={navVariants}
            className="fixed top-0 right-0 w-4/6 h-screen bg-secondary border-l-4 flex flex-col items-end justify-center shadow-xl"
          >
            <HiX
              className="w-10 h-10 my-7 mx-10 text-black cursor-pointer"
              onClick={() => setToggle(false)}
            />
            <motion.ul
              className="w-full h-full flex flex-col gap-y-10 mt-4"
              initial="initial"
              animate="animate"
              variants={navListVariants}
            >
              {links.map((link, index) => (
                <motion.li
                  variants={navItemVariants}
                  className="ml-12 text-lg"
                  key={index}
                >
                  <Link
                    href={link.path}
                    onClick={() => {
                      setPathName(link.path);
                      setToggle(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
              <motion.a
                variants={navItemVariants}
                href="/Daniel_Leonte_CV.pdf"
                download="Daniel_Leonte_CV.pdf"
                className="p-2 rounded-full bg-primary shadow-primary/50 shadow-md flex justify-around items-center gap-0.5 px-2.5 w-32 ml-8"
              >
                <AiOutlineDownload className="w-6 h-6 text-white" />
                <p className="text-white text-center">Resume</p>
              </motion.a>
            </motion.ul>
          </motion.div>
        )}
      </div>
      <a
        href="/Daniel_Leonte_CV.pdf"
        download="Daniel_Leonte_CV.pdf"
        className="p-2 px-3 rounded-full bg-primary shadow-primary/50 shadow-md hidden md:flex gap-1 items-center"
      >
        <AiOutlineDownload className="w-6 h-6 text-white" />
        <p className="text-white text-center">Resume</p>
      </a>
    </nav>
  );
};

export default Navbar;
