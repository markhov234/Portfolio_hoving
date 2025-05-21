import { useEffect } from "react";

const useTheme = (theme) => {
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
};

export default useTheme;
