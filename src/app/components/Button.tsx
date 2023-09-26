"use client";
import { useState } from "react";

import { ContactMe } from "./ContactMe";
import { Modal } from "./Modal";

const Button = ({ style }: { style?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`${style} bg-primary text-white font-bold text-sm py-5 px-10 rounded-full shadow-primary/50 shadow-md`}
        onClick={() => setIsOpen(true)}
      >
        Contact Me
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ContactMe />
      </Modal>
    </>
  );
};

export default Button;
