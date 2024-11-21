"use client";
import React, { useEffect, useState, createContext } from "react";

const getInitialTheme = () => {
      if (typeof window !== "undefined" && window.localStorage) {
            const storedPrefs = window.localStorage.getItem("color-theme");
            if (typeof storedPrefs === "string") {
                  return storedPrefs;
            }

            const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
            if (userMedia.matches) {
                  return "dark";
            }
      }
      return "light";
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ initialTheme, children }) => {
      const [theme, setTheme] = useState(
            typeof window === "undefined" ? "light" : getInitialTheme()
      );
      const [isMounted, setIsMounted] = useState(false);

      useEffect(() => {
            setIsMounted(true); // Prevent mismatched content
            const root = window.document.documentElement;
            const isDark = theme === "dark";

            root.classList.remove(isDark ? "light" : "dark");
            root.classList.add(theme);

            localStorage.setItem("color-theme", theme);
      }, [theme]);

      if (!isMounted) {
            // Render nothing until the theme is determined
            return null;
      }

      return (
            <ThemeContext.Provider value={{ theme, setTheme }}>
                  {children}
            </ThemeContext.Provider>
      );
};
