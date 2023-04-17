"use client";

import { fontAtom } from "@/store";
import { useAtom } from "jotai";
import { Inconsolata, Inter, Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: true,
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
});

const lora = Lora({
  variable: "--font-lora",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  const [font] = useAtom(fontAtom);

  const fontType = {
    sans: "font-sans",
    mono: "font-mono",
    serif: "font-serif",
  };

  return (
    <ThemeProvider attribute="class">
      <div
        className={`${inter.variable} ${inconsolata.variable} ${lora.variable} min-h-screen bg-white ${fontType[font]} text-base text-gray-700 antialiased transition-colors dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </div>
    </ThemeProvider>
  );
}
