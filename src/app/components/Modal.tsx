import { HiX } from "react-icons/hi";

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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex z-50 items-center justify-center">
      <div className="bg-white w-5/6 sm:w-3/6 md:w-3/7 min-[1030px]:w-2/6 min-[1500px]:w-2/7 h-1/2 rounded-lg shadow-primary/30 shadow-md">
        <div className="flex justify-end">
          <HiX className="w-7 h-7 m-2 text-black" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};
