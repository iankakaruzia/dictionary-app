import type { Word } from "@/types/word";
import { nanoid } from "nanoid";
import Image from "next/image";

import { Meaning } from "./Meaning";
import { PlayButton } from "./PlayButton";

type WordProps = {
  data: Word;
  audioToPlay?: string;
};

export function Word({ data, audioToPlay }: WordProps) {
  return (
    <>
      <section className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold md:text-6xl">{data.word}</h1>
          {data.phonetic && (
            <span className="text-lg text-purple-500 md:text-2xl">
              {data.phonetic}
            </span>
          )}
        </div>
        {!!audioToPlay && <PlayButton audioToPlay={audioToPlay} />}
      </section>
      {data.meanings.map((meaning) => (
        <Meaning key={nanoid()} meaning={meaning} />
      ))}

      {!!data.sourceUrls?.length && (
        <footer className="mt-8 border-t border-gray-600 pt-6 md:mt-10 md:flex md:items-center md:gap-5 md:pt-5">
          <span className="text-sm text-gray-500 underline">Source</span>
          <div className="mt-2 flex items-center gap-2 md:mt-0">
            <a
              href={data.sourceUrls[0]}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline"
            >
              {data.sourceUrls[0]}
            </a>
            <Image
              src="/assets/images/icon-new-window.svg"
              alt=""
              width={14}
              height={14}
              className="h-3 w-3"
            />
          </div>
        </footer>
      )}
    </>
  );
}
