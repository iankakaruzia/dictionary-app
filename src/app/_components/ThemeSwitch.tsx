"use client";

import { Switch } from "@headlessui/react";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleTheme() {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) {
    return null;
  }

  const enabled =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  return (
    <div className="flex items-center gap-5">
      <Switch
        checked={enabled}
        onChange={toggleTheme}
        className="relative inline-flex h-5 w-10 items-center rounded-full bg-gray-500 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-1 focus-visible:ring-gray-500 focus-visible:ring-opacity-75 dark:bg-purple-500 dark:focus-visible:ring-purple-500"
      >
        <span className="sr-only">Enable dark mode</span>
        <span
          className={classNames(
            "inline-block h-[14px] w-[14px] transform rounded-full bg-white transition",
            {
              "translate-x-6": enabled,
              "translate-x-1": !enabled,
            }
          )}
        />
      </Switch>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        className="h-5 w-5"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M1 10.449a10.544 10.544 0 0019.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 001 10.449z"
          className="stroke-gray-500 dark:stroke-purple-500"
        ></path>
      </svg>
    </div>
  );
}
