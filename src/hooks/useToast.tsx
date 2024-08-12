import { useContext, useEffect } from "react";
import { ToastContext, IToast } from "../providers/toast.provider";

const generateID = () => Math.random().toString(16).slice(-2);
export const useToast = () => {
  const { toasts, setToasts } = useContext(ToastContext);
  const addToast =
    ({ message, timeout }: Omit<IToast, "id" | "timeoutId">) =>
    () => {
      if (setToasts) {
        const id = generateID();
        const timeoutId = setTimeout(() => removeToast(id)(), timeout);
        setToasts((prevToasts) => [
          ...prevToasts,
          { message, id, timeout, timeoutId },
        ]);
      }
    };
  const removeToast = (removeId: string) => () => {
    const timerId = toasts.find(({ id }) => id === removeId)?.timeoutId;
    clearTimeout(timerId);
    if (setToasts)
      setToasts((prevToasts) => prevToasts.filter(({ id }) => id !== removeId));
  };

  useEffect(() => {
    return () => {
      toasts.forEach(({ timeoutId }) => clearTimeout(timeoutId));
    };
  }, []);

  return {
    alert: addToast,
    dismiss: removeToast,
  };
};
