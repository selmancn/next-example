import Image from "next/image";
import MessagesList from "./components/MessagesList";

export default function Home({ session }: any) {
  return (
    <main className="flex flex-1 flex-col items-center justify-between px-5">
      <MessagesList />
    </main>
  );
}
