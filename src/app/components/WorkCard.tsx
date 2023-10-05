import Image from "next/image";

import { slackLogo } from "../assets";

const WorkCard = ({
  id,
  title,
  company,
  time,
  setSelectedWork,
}: {
  id: number;
  title: string;
  company: string;
  time: string;
  setSelectedWork: (index: number) => void;
}) => {
  return (
    <div
      className="work-card ease border rounded-xl 2xl:w-[607px] xl:w-[550px] min-[1150px]:w-[500px] lg:w-96 md:w-[600px] sm:w-[500px] xsm:w-[340px] w-[290px] h-[122px] p-8 flex gap-7 items-center relative left-0"
      onMouseOver={() => setSelectedWork(id)}
    >
      <Image src={slackLogo} alt="slack" />
      <div className="flex flex-col gap-y-1.5">
        <p className="font-bold text-textPrimary xsm:text-2xl text-xl">
          {company}
        </p>
        <div className="flex flex-col md:flex-row gap-x-1">
          <p className="font-medium xsm:text-base text-xs">{title}</p>
          <p className="font-medium xsm:text-base text-xs hidden xl:block">-</p>
          <p className="font-medium xsm:text-base text-xs">
            {time} experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
