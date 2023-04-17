import type { DictionaryResponse } from "@/types/word";
import { atom } from "jotai";

export type FontType = "sans" | "mono" | "serif";

export const fontAtom = atom<FontType>("sans");

export const dictionaryAtom = atom<DictionaryResponse | null>(null);
