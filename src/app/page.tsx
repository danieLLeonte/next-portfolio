import { About, Hero } from "./components";

interface SectionWrapperProps {
  children: React.ReactNode;
  bgColor: string;
}

const SectionWrapper = ({ children, bgColor }: SectionWrapperProps) => {
  return (
    <div className={bgColor}>
      <div className="max-w-[1440px] mx-auto px-8 min-[387px]:px-12">
        {children}
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <SectionWrapper bgColor="bg-secondary">
        <Hero />
      </SectionWrapper>
      <SectionWrapper bgColor="bg-white">
        <About />
      </SectionWrapper>
    </>
  );
};

export default HomePage;
