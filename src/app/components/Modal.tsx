import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className=" fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex z-50 items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-72 sm:w-96 rounded-2xl shadow-xl shadow-primary/20 flex-col justify-between bg-white"
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
