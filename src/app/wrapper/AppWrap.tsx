import { ComponentType } from "react";
import { motion } from "framer-motion";

const AppWrap = (
  Component: ComponentType,
  idName: string,
  classNames: string
) =>
  function HOC() {
    return (
      <div id={idName} className={`${classNames} sm:py-28 py-24 xl:py-0`}>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="max-w-[1440px] mx-auto px-8 sm:px-12 lg:px-24"
        >
          <Component />
        </motion.div>
      </div>
    );
  };

export default AppWrap;
