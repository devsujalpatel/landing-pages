import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-greeny-muted h-screen md:p-10">
      <div className="bg-greeny mx-auto flex h-screen w-full max-w-2xl overflow-hidden md:h-[98%] md:rounded-xl md:border md:border-slate-400 md:shadow-xl">
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
            alt="Green Leafs"
            width={500}
            height={500}
            className="mb-20 w-full overflow-hidden object-cover"
          />
          <div className="bg-greeny absolute top-15 z-10 size-55 rounded-full p-4">
            <div className="rounded-full bg-white p-2 shadow">
              <Image
                src="https://avatars.githubusercontent.com/u/162797735?v=4"
                alt="Green Leafs"
                width={500}
                height={500}
                className="w-full overflow-hidden rounded-full object-cover"
              />
            </div>
          </div>
          <div className="bg-greeny absolute top-1/2 left-1/2 mt-28 flex h-[90%] w-[100rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-t-full">
            <div className="mt-32 text-center">
              <h1 className="font-code text-4xl font-bold text-shadow-2xs">
                Sujal Patel
              </h1>
              <p className="text-md mt-2">Design Engineer | Backend Engineer</p>
            </div>
            <div className="mt-2 flex gap-4">
              <Link target="_blank" href={"https://x.com/sujalpatelcoder"}>
                <IconBrandX className="size-6 hover:text-neutral-600" />
              </Link>
              <Link target="_blank" href={"https://github.com/devsujalpatel"}>
                <IconBrandGithub className="size-6 hover:text-neutral-600" />
              </Link>
              <Link target="_blank" href={"https://linkedin.com/in/devsujal"}>
                <IconBrandLinkedin className="size-6 hover:text-neutral-600" />
              </Link>
              <Link target="_blank" href={"https://sujalpatel.tech"}>
                <IconWorld className="size-6 hover:text-neutral-600" />
              </Link>
            </div>
            <div className="mt-7 flex w-80 flex-col gap-4">
              <Link
                className="ease w-full rounded-md bg-neutral-200 px-4 py-2 text-center text-lg font-bold text-neutral-600 shadow transition-all duration-200 hover:bg-neutral-300"
                href="/landing-1"
              >
                Home Animation
              </Link>
              <Link
                className="ease w-full rounded-md bg-neutral-200 px-4 py-2 text-center text-lg font-bold text-neutral-600 shadow transition-all duration-200 hover:bg-neutral-300"
                href="https://verginmojito.netlify.app/"
              >
                Vergin Mojito
              </Link>
              <Link
                className="ease w-full rounded-md bg-neutral-200 px-4 py-2 text-center text-lg font-bold text-neutral-600 shadow transition-all duration-200 hover:bg-neutral-300"
                href="https://sujalpatel.tech/"
              >
                Portfolio
              </Link>
              <Link
                className="ease w-full rounded-md bg-neutral-200 px-4 py-2 text-center text-lg font-bold text-neutral-600 shadow transition-all duration-200 hover:bg-neutral-300"
                href="https://apple.ringui.tech/"
              >
                Apple Landing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
