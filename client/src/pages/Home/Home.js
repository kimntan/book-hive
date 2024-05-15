import FindBook from "../../components/FindBook/FindBook";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Library from "../../components/Library/Library";

export default function Home({books}) {


  return (
    <>
      <Header />
      <Hero books= {books} />
      <FindBook />
      <Library books={books} />
    </>
  );
}