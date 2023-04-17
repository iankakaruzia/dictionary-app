import Image from "next/image";
import { FontSwitch } from "./FontSwitch";
import { ThemeSwitch } from "./ThemeSwitch";

export function Header() {
  return (
    <header className="m-auto flex items-center p-6 md:px-10 md:py-14 lg:max-w-[736px]">
      <Image
        src="/assets/images/logo.svg"
        height={38}
        width={34}
        alt="Dictionary"
        className="mr-auto h-8 w-7 md:h-9 md:w-8"
      />

      <FontSwitch />
      <div className="mx-6 h-8 w-[1px] bg-gray-400" />
      <ThemeSwitch />
    </header>
  );
}
