import { DefaultToastOptions } from "react-hot-toast";

export const toastOptions = (isDark: boolean): DefaultToastOptions => {
  return {
    style: {
      fontFamily: "bahnschrift",
      border: `2.1px solid ${isDark ? "#f5f4f9" : "#1a1a1a"}`,
      backgroundColor: `${isDark ? "#1a1a1a" : "#f5f4f9"}`,
      color: isDark ? "#f5f4f9" : "#1a1a1a"
    }
  };
};