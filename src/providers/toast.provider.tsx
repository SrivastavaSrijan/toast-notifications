import { createContext, Dispatch, SetStateAction } from "react";

export interface IToast {
  message: string | JSX.Element;
  timeout: number;
  timeoutId: number;
  id: string;
}
export interface IToastContext {
  toasts: IToast[];
  setToasts: Dispatch<SetStateAction<IToastContext["toasts"]>> | null;
}
export const ToastContext = createContext<IToastContext>({
  toasts: [],
  setToasts: null,
});
