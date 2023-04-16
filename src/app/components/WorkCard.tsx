import Image from "next/image";

import { slackLogo } from "../assets";

const WorkCard = () => {
  return (
    <div className="work-card ease border rounded-xl xl:w-[607px] lg:w-96 md:w-[600px] sm:w-[400px] xsm:w-[340px] w-[290px] h-[122px] p-8 flex gap-7 items-center relative left-0">
      <Image src={slackLogo} alt="slack" />
      <div className="flex flex-col gap-y-1.5">
        <h6 className="font-bold text-textPrimary xsm:text-2xl text-xl">
          UI Design
        </h6>
        <div className="flex flex-col md:flex-row gap-x-1">
          <p className="font-medium xsm:text-base text-xs">Product Design</p>
          <p className="font-medium xsm:text-base text-xs hidden xl:block">-</p>
          <p className="font-medium xsm:text-base text-xs">
            4 years experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
