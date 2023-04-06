import Link from "next/link";

const HopePage = () => {
  return (
    <div>
      <h1>Welcome To My Portfolio</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default HopePage;
