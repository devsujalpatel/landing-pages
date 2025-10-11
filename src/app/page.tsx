import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl">
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1525923838299-2312b60f6d69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627"
          alt="Green Leafs"
          width={500}
          height={500}
          className="w-full overflow-hidden object-cover mb-20"
        />
        <div className="bg-background absolute top-15 z-10 size-55 rounded-full p-4">
          <div className="rounded-full bg-white p-2">
            <Image
              src="https://avatars.githubusercontent.com/u/162797735?v=4"
              alt="Green Leafs"
              width={500}
              height={500}
              className="w-full overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
        <div className="bg-background absolute top-1/2 left-1/2 mt-28 flex h-[90%] w-[100rem] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center rounded-t-full">
          <div className="mt-32 text-center">
            <h1 className="text-4xl font-bold">Sujal Patel</h1>
            <p className="text-md mt-2">Design Engineer</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </main>
  );
}
