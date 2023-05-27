"use client";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";

const getLinkColor = (pathname: string, link: string) =>
  pathname === link ? "text-textPrimary" : "text-textSecondary";

const Header = () => {
  const [pathName, setPathName] = useState<string>("");
  const [shadow, setShadow] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setPathName(window.location.hash);

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
      className={`ease-in-out duration-300 font-bold uppercase h-20 sticky inset-0 z-50 flex items-center bg-secondary ${
        shadow ? "shadow-xl pt-1" : "pt-4"
      }`}
    >
      <Navbar
        getLinkColor={getLinkColor}
        setToggle={setToggle}
        toggle={toggle}
        pathName={pathName}
        setPathName={setPathName}
      />
    </header>
  );
};

export default Header;
