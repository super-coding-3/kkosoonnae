import { useState } from "react";
import ToastMessage from "../components/common/ToastMessage";

interface ToastParams {
  message: string;
  action?: () => void;
}

const useToastMessage = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showToastMessage, setShowToastMessage] = useState<boolean>(false);

  const showToast = ({ message, action }: ToastParams) => {
    setToastMessage(message);
    setShowToastMessage(true);
    setTimeout(() => {
      setShowToastMessage(false);
      setToastMessage(null);
      if (action) {
        action();
      }
    }, 2000);
  };

  const Toast = () =>
    showToastMessage && toastMessage ? (
      <ToastMessage message={toastMessage} />
    ) : null;

  return { showToast, Toast };
};

export default useToastMessage;
