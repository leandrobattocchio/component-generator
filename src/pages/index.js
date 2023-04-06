import Head from "next/head";
import Prompt from "@/components/Prompt";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Filters from "@/components/Filters";
import { Debuger } from "@/components/Debuger";
import { Blobs } from "@/components/Blobs";


export default function Home () {
  return (
    <>
      <Head>
        <title>UI component generator</title>
        <meta name="description" content="Generate components with chatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-here flex flex-col min-h-screen items-center" >
        <Debuger />
        <Header />
        <Blobs />
        <Prompt />
        <Filters />
        <Preview />
      </main>
    </>
  );
}
