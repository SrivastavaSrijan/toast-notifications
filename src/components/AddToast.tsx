import { useToast } from "../hooks/useToast";

export const AddToast = () => {
  const { alert } = useToast();
  return (
    <div>
      <button
        onClick={alert({
          message: "Lorem ipsum dolor sit amet",
          timeout: 1000,
        })}
      >
        Add Toast
      </button>
    </div>
  );
};
