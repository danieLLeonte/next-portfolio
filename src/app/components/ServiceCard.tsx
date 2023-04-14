import Image from "next/image";

import { service } from "../assets";

const ServiceCard = () => {
  return (
    <div>
      <Image src={service} alt="service" width={62} height={62} />
      <div>
        <h6>UI Design</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quo ex
          debitis alias eligendi. Autem odit repellendus minima soluta omnis.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
