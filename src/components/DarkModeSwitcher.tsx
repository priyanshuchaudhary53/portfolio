"use client";

import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "@/Hooks/useLocalStorage";

const DarkModeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [darkSide, setDarkSide] = useState(false);

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    setDarkSide(theme === "dark" ? true : false);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  const toggleDarkMode = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setDarkSide((prevState) => !prevState);
  };

  return (
    <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={28} />
  );
};

export default DarkModeSwitcher;
