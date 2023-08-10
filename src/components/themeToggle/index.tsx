"use client";

import { MoonStars, Sun } from "@phosphor-icons/react";
import { useState } from "react";

export const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");
	const handleTheme = () => {
		if (!("theme" in localStorage)) {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			setTheme("light");
			localStorage.removeItem("theme");
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<button
			onClick={handleTheme}
			className="dark:text-gray-200 transition ease-in duration-200"
		>
			{theme === "dark" ? (
				<Sun width={25} height={25} weight={"duotone"} />
			) : (
				<MoonStars width={25} height={25} weight={"duotone"} />
			)}
		</button>
	);
};
