import { CgIfDesign } from "react-icons/cg";

const ServiceCard = ({ style }: { style?: string }) => {
  return (
    <div
      className={`service-card ease bg-secondary rounded-lg w-72 h-96 p-8 flex flex-col justify-between ${style}`}
    >
      <div className="icon-container ease bg-primary shadow-primary/50 shadow-md rounded-lg h-16 w-16 text-white flex justify-center items-center">
        <CgIfDesign className="icon ease text-4xl" />
      </div>
      <div className="content-container ease flex flex-col gap-y-5">
        <h6 className="font-bold text-textPrimary text-2xl">UI Design</h6>
        <p className="font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo ex
          debitis alias eligendi. Autem odit repellendus minima soluta omnis.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
