import React from "react";
import { Modal, ModalProps } from "flowbite-react";

interface CustomModalProps extends ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  size?: "sm" | "md" | "lg" | "xl";
}

const CustomModal: React.FC<CustomModalProps> = ({
  children,
  onClose,
  size = "md",
  ...rest
}) => {
  return (
    <Modal {...rest} onClose={onClose} size={size}>
      <div className="px-4 py-4"> {children}</div>
    </Modal>
  );
};

export default CustomModal;
