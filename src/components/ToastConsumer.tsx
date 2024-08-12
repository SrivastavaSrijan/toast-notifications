import { useContext } from "react";
import { ToastContext } from "../providers/toast.provider";
import { useToast } from "../hooks/useToast";

export const ToastConsumer = () => {
  const { toasts } = useContext(ToastContext);
  const { dismiss } = useToast();
  return (
    <div className="toast__container">
      {toasts.map(({ message, id }, index) => (
        <div className="toast__wrapper" style={{ bottom: index * 100 }}>
          <p>{message}</p>
          <button onClick={dismiss(id)}>X</button>
        </div>
      ))}
    </div>
  );
};
