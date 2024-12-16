import { useState, useEffect } from "react";
import "@/Layouts/Components/css/ThemeSwitcher.css";
import { IcomoonFreeSun as IconSun } from "@/Icons/Sun";
import { RiMoonFill as IconMoon } from "@/Icons/Moon";

export default function ThemeSwitcher({ auth, laravelVersion, phpVersion }) {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return (
        <>
            <button
                onClick={toggleTheme}
                className="p-2 bg-gray-800 text-white rounded"
            >
                {theme === "light" ? (
                    <IconMoon icon="ri:moon-fill" width="16" height="16" />
                ) : (
                    <IconSun icon="icomoon-free:sun" width="16" height="16" />
                )}
            </button>
        </>
    );
}
