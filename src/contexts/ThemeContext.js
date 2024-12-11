import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = theme === "light"
    ? { backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }
    : { backgroundColor: "#000000", color: "#ffffff", minHeight: "100vh" };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyles}>{children}</div>
    </ThemeContext.Provider>
  );
};
