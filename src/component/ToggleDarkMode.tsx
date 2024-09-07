import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { useState } from "react";

const themes = {
  light: "retro",
  dark: "dark",
};

const ToggleDarkMode = () => {
  const storedTheme = localStorage.getItem("theme") || themes.light;
  const [currentTheme, setCurrentTheme] = useState<string>(storedTheme);
  const handleChangeMode = () => {
    if (currentTheme === "retro") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "retro");
      localStorage.setItem("theme", "retro");
      setCurrentTheme("retro");
    }
  };
  return (
    <div className="absolute top-5 right-16">
      {currentTheme === "light" ? (
        <button onClick={handleChangeMode}>
          <IoSunny className="text-3xl" />
        </button>
      ) : (
        <button onClick={handleChangeMode}>
          <MdDarkMode className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default ToggleDarkMode;
