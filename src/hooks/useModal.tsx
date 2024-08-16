import { useState } from "react";

interface ModalPrams {
  initiallyOpen?: boolean;
}

const useModal = ({ initiallyOpen = false }: ModalPrams) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    open,
    close,
    toggle
  };
};

export default useModal;
