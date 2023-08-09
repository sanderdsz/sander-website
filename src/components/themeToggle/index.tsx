'use client'

import { MoonStars, Sun } from '@phosphor-icons/react'
import {useState} from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const handleTheme = () => {
    if (!('theme' in localStorage))  {
      setTheme("dark");
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme("light");
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
    }
  }

  return (
    <button
      onClick={handleTheme}
      className="dark:text-gray-800 dark:border-gray-800 transition ease-in duration-300"
    >
      {theme === 'light' ? (
        <Sun width={35} weight={"duotone"}/>
      ) : (
        <MoonStars width={35} weight={"duotone"} />
      )}
    </button>
  )
}