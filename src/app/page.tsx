import { WordForm } from "./_components/WordForm";
import { Container } from "./_components/Container";
import { Header } from "./_components/Header";
import type { DictionaryResponse } from "@/types/word";
import { EmptyMessage } from "./_components/EmptyMessage";
import { Word } from "./_components/Word";
import { getValidAudio } from "@/utils/audio";

type PageProps = {
  searchParams: {
    word?: string;
  };
};

const fetchWord = async (word?: string) => {
  if (!word) return;

  const wordData = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word ?? ""}`
  ).then((res) => res.json() as Promise<DictionaryResponse>);

  return wordData;
};

export default async function Home({ searchParams: { word } }: PageProps) {
  const wordData = await fetchWord(word);
  const audioToPlay = getValidAudio(wordData);

  return (
    <Container>
      <Header />
      <WordForm defaultWord={word} />

      <main className="px-6 pb-16 pt-7 md:px-10 md:pt-12 lg:mx-auto lg:max-w-[736px]">
        {wordData?.length && (
          <Word data={wordData[0]} audioToPlay={audioToPlay} />
        )}
        {!wordData?.length && word && <EmptyMessage />}
      </main>
    </Container>
  );
}
