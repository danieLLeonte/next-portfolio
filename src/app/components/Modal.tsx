import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useEffect } from "react";

import { modalVairants } from "../utils/motion";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial="initial"
        animate="animate"
        variants={modalVairants}
        className="w-72 sm:w-96 rounded-2xl shadow-xl shadow-primary/20 flex-col justify-between bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <HiX
            className="w-7 h-7 m-2 text-black opacity-80"
            onClick={onClose}
          />
        </div>
        {children}
      </motion.div>
    </div>
  );
};
