"use client";

import { useAtom } from "jotai";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import classNames from "classnames";
import { type FontType, fontAtom } from "@/store";

const fontsMapper = new Map<FontType, string>([
  ["serif", "Sans Serif"],
  ["sans", "Serif"],
  ["mono", "Mono"],
]);

const fontType = {
  sans: "font-sans",
  mono: "font-mono",
  serif: "font-serif",
};

export function FontSwitch() {
  const [font, setFont] = useAtom(fontAtom);

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-4 text-sm font-bold md:text-lg">
        {fontsMapper.get(font)}
        <Image
          src="/assets/images/icon-arrow-down.svg"
          alt=""
          width={14}
          height={8}
        />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-2xl bg-white p-6 shadow-[0px_5px_30px_rgba(0,_0,_0,_0.1)] focus:outline-none dark:bg-gray-800 dark:shadow-[0px_5px_30px_#A445ED]">
          <div className="flex flex-col items-start gap-4">
            {Array.from(fontsMapper.entries()).map(([key, value]) => (
              <Menu.Item key={key}>
                {({ active }) => (
                  <button
                    onClick={() => setFont(key)}
                    className={classNames(
                      `text-sm font-bold hover:text-purple-500 md:text-lg ${fontType[key]}`,
                      {
                        "text-purple-500": active,
                      }
                    )}
                  >
                    {value}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
