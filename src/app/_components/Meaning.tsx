"use client";

import { nanoid } from "nanoid";
import type { Meaning } from "@/types/word";
import { useRouter } from "next/navigation";

type MeaningProps = {
  meaning: Meaning;
};

export function Meaning({ meaning }: MeaningProps) {
  const router = useRouter();

  function navigateToSynonym(synonym: string) {
    void router.push(`?word=${synonym}`);
  }

  console.log({ meaning });

  return (
    <div className="mt-8">
      <div className="mb-8 flex items-center gap-5 md:mb-10">
        <strong className="text-lg font-bold md:text-2xl">
          {meaning.partOfSpeech}
        </strong>
        <div className="h-[1px] flex-1 bg-gray-600" />
      </div>

      <div>
        <span className="text-gray-500 md:text-xl">Meaning</span>
        <ul className="mt-4 flex list-disc flex-col gap-3 pl-[18px] marker:text-purple-500 md:pl-10">
          {meaning.definitions.map((definition) => (
            <li key={nanoid()}>
              <p className="md:text-lg">{definition.definition}</p>
              {!!definition.example && (
                <q className="mt-3 block text-gray-500 md:text-lg">
                  {definition.example}
                </q>
              )}
            </li>
          ))}
        </ul>
      </div>

      {!!meaning.synonyms.length && (
        <div className="mt-6 flex items-start gap-6 md:mt-10">
          <span className="text-gray-500 md:text-xl">Synonyms</span>

          <div className="flex flex-wrap items-center gap-2">
            {meaning.synonyms.map((synonym) => (
              <button
                className="font-bold text-purple-500 md:text-xl"
                key={synonym}
                role="link"
                onClick={() => navigateToSynonym(synonym)}
              >
                {synonym}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
