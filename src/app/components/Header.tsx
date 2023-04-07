import Image from "next/image";
import Link from "next/link";

import logo from "../assets/logo.svg";

const Header = () => {

  return (
    <header className="flex justify-between border items-center font-bold">
      <Image src={logo} width={32}  height={32} alt="logo" />
      <nav>
        <ul className="flex justify-between gap-x-10">
          <li className="text-textPrimary">
            <Link href={'/'}>HOME</Link>
          </li>
          <li>
            <Link href={'/about'}>ABOUT ME</Link>
          </li>
          <li>
            <Link href={'/projects'}>PROJECTS</Link>
          </li>
        </ul>
      </nav>
      <button>
        DOWNLOAD CV
      </button>
    </header>
  );
};

export default Header;
