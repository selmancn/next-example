import Image from "next/image";

export default function Home({session}:any) {
  console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Giriş Yap</div>
      <div></div>
    </main>
  );
}
