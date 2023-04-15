import { About, Hero, Work } from "./components";

interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor: string;
  id?: string;
}

const SectionWrapper = ({ children, bgColor, id }: SectionWrapperProps) => {
  return (
    <div id={id} className={`${bgColor} sm:py-28 py-24 xl:py-0`}>
      <div className="max-w-[1440px] mx-auto px-8 min-[387px]:px-12">
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <SectionWrapper bgColor="bg-secondary !pt-0">
        <Hero />
      </SectionWrapper>
      <SectionWrapper id="about" bgColor="bg-white">
        <About />
      </SectionWrapper>
      <SectionWrapper id="work" bgColor="bg-white">
        <Work />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
