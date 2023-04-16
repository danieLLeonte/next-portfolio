"use client";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";

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
    // link without hash
    const linkWithoutHash = link.replace("#", "");
    const target = document.getElementById(linkWithoutHash);
    target?.scrollIntoView({ block: "start" });
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
      className={`ease-in-out duration-300 font-bold uppercase h-20 sticky inset-0 z-50 flex items-center bg-secondary ${
        shadow ? "shadow-xl pt-1" : "pt-4"
      }`}
    >
      <Navbar
        getLinkColor={getLinkColor}
        handleLinkClick={handleLinkClick}
        setToggle={setToggle}
        toggle={toggle}
        pathName={pathName}
      />
    </header>
  );
};

export default Header;
