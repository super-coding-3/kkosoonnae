import React from "react";
import { useModal } from "../../hooks/useModal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>This is a modal</h2>
        <p>Modal content goes here.</p>
      </Modal>
    </div>
  );
};

export default App;
