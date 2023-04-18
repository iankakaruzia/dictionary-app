"use client";

import { playAudio } from "@/utils/audio";

type PlayButtonProps = {
  audioToPlay: string;
};

export function PlayButton({ audioToPlay }: PlayButtonProps) {
  return (
    <button
      aria-label="Play phonetic"
      className="group"
      onClick={() => void playAudio(audioToPlay)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 75 75"
        className="h-12 w-12 md:h-[75px] md:w-[75px]"
      >
        <g fill="#A445ED" fillRule="evenodd">
          <circle
            cx="37.5"
            cy="37.5"
            r="37.5"
            className="opacity-25 transition-all group-hover:opacity-100"
          ></circle>
          <path
            d="M29 27v21l21-10.5z"
            className="transition-colors group-hover:fill-white"
          ></path>
        </g>
      </svg>
    </button>
  );
}
