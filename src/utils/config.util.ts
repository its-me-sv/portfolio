import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions = (isDark: boolean): DefaultToastOptions => {
  return {
    style: {
      fontFamily: "core-sans-g",
      border: `1.8px solid ${isDark ? "#f5f4f9" : "#1a1a1a"}`,
      backgroundColor: `${isDark ? "#1a1a1a" : "#f5f4f9"}`,
      color: isDark ? "#f5f4f9" : "#1a1a1a"
    }
  };
};