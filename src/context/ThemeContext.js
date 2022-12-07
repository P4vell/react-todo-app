import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

const getInitialTheme = () => {
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }
  return "light";
};

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const changeTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
  }

  useEffect(() => {
    changeTheme(theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
