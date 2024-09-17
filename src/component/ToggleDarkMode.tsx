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
    const currTheme = localStorage.getItem("theme");
    console.log(currTheme);
    console.log(currentTheme);
    if (currentTheme === "retro") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setCurrentTheme("dark");
      return;
    }
    document.documentElement.setAttribute("data-theme", "retro");
    localStorage.setItem("theme", "retro");
    setCurrentTheme("retro");
  };
  return (
    <div>
      <button className="btn" onClick={handleChangeMode}>
        {currentTheme !== "dark" && <IoSunny className="text-3xl" />}
        {currentTheme === "dark" && <MdDarkMode className="text-3xl" />}
      </button>
    </div>
  );
};

export default ToggleDarkMode;
