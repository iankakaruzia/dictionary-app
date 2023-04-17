"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

type WordFormProps = {
  defaultWord?: string;
};

export function WordForm({ defaultWord }: WordFormProps) {
  const [search, setSearch] = useState(defaultWord ?? "");
  const [hasError, setHasError] = useState(false);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setHasError(false);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!search) {
      setHasError(true);
      return;
    }

    setHasError(false);
  }

  return (
    <form
      className="px-6 md:px-10 lg:mx-auto lg:max-w-[736px]"
      onSubmit={handleSubmit}
    >
      <div
        className={classNames(
          "flex h-12 items-center justify-between gap-1 rounded-2xl bg-gray-300 pl-3 pr-6 dark:bg-gray-800 md:h-16",
          {
            "focus-within:ring-1 focus-within:ring-purple-500": !hasError,
            "ring-1 ring-red-500": hasError,
          }
        )}
      >
        <input
          type="text"
          className="flex-1 border-none bg-transparent font-bold placeholder:font-bold placeholder:text-gray-700/25 focus:ring-0 dark:placeholder:text-white/25 md:text-xl"
          placeholder="Search for any word..."
          value={search}
          onChange={handleSearch}
        />
        <Image
          src="/assets/images/icon-search.svg"
          alt=""
          width={18}
          height={18}
          className="h-4 w-4 lg:h-[18px] lg:w-[18px]"
        />
      </div>
      {hasError && (
        <span className="mt-2 block text-red-500 md:text-xl">
          Whoops, can’t be empty…
        </span>
      )}
    </form>
  );
}
