import { About, Hero } from "./components";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24 lg:gap-0">
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;
