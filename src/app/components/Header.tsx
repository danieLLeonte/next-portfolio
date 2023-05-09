"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Navbar from "./Navbar";

const getLinkColor = (pathname: string, link: string) =>
  pathname === link ? "text-textPrimary" : "text-textSecondary";

const Header = () => {
  const [pathName, setPathName] = useState<string>("");
  const [shadow, setShadow] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const router = useRouter();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLDivElement>,
    link: string
  ) => {
    if (typeof window === "undefined") {
      return;
    }

    // scroll to top, home
    if (link === "") {
      e.preventDefault();
      window.scrollTo({ top: 0 });
      router.push("/");
    }
    // scroll to section
    const targetId = link.replace("#", "");
    let elem = document.getElementById(targetId);
    window.scrollTo({ top: elem?.offsetTop || 0 });
    setPathName(link);
  };

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
        handleLinkClick={handleLinkClick}
        setToggle={setToggle}
        toggle={toggle}
        pathName={pathName}
      />
    </header>
  );
};

export default Header;
