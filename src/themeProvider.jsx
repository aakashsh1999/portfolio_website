import React, { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext();

const getInitialDark = () => {
  if (typeof window === "undefined") return true;
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light") return false;
  if (saved === "dark") return true;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? false
    : true;
};

const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    case "INIT":
      return { darkMode: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    dispatch({ type: "INIT", payload: getInitialDark() });
  }, []);

  useEffect(() => {
    const theme = state.darkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
    // Keep animated nodes fully visible after theme switch (avoid washed-out text)
    document.querySelectorAll("[data-helium-animation]").forEach((el) => {
      el.style.opacity = "1";
      el.style.filter = "none";
    });
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
