import Board from "@/components/board/Board";
import Header from "@/components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      {/* header */}
      <Header/>
      {/* Body */}
      <Board/>
   
    </main>
  );
}
