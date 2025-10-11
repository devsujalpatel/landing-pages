import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-40">
      <div className="flex gap-4 flex-col bg-slate-900 ">
        <Link href={"/landing-1"} className="py-2 px-4 hover:text-neutral-400">
          Landing Page 1
        </Link>
      </div>
    </main>
  );
}
