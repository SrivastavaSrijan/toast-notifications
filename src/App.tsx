import { useState } from "react";
import "./App.css";
import { IToast, ToastContext } from "./providers/toast.provider";
import { ToastConsumer } from "./components/ToastConsumer";
import { AddToast } from "./components/AddToast";

function App() {
  const [toasts, setToasts] = useState<IToast[]>([]);
  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
      }}
    >
      <ToastConsumer />
      <AddToast />
    </ToastContext.Provider>
  );
}

export default App;
