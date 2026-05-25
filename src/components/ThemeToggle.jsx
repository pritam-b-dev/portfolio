"use client";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black"
    >
      {resolvedTheme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
