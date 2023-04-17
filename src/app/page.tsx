import Head from "next/head";
import { WordForm } from "./_components/WordForm";
import { Container } from "./_components/Container";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dictionary App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
      </Head>
      <Container>
        <Header />
        <WordForm />
      </Container>
    </>
  );
}
