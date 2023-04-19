import { CgIfDesign } from "react-icons/cg";

const ServiceCard = ({ style="" }: { style?: string }) => {
  return (
    <div
      className={`service-card ease bg-secondary rounded-lg p-8 flex flex-col justify-between gap-14 ${style}`}
    >
      <div className="icon-container ease bg-primary shadow-primary/50 shadow-md rounded-lg xsm:h-16 xsm:w-16 h-14 w-14 text-white flex justify-center items-center">
        <CgIfDesign className="icon ease xsm:text-4xl text-3xl" />
      </div>
      <div className="content-container ease flex flex-col gap-y-5">
        <h6 className="font-bold text-textPrimary xsm:text-2xl text-xl">
          UI Design
        </h6>
        <p className="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo ex
          debitis alias eligendi. Autem odit repellendus minima soluta omnis.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
