import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions = (isDark: boolean): DefaultToastOptions => {
  return {
    style: {
      fontFamily: "core-sans-g",
    }
  };
};