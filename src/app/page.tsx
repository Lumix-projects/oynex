import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={"/Hero.webp"}
        alt="Hero Image"
        fill
        className="object-cover object-center"
        priority
      />

      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-center bg-black/50 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-6xl text-white leading-tight drop-shadow-lg">
          Title
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-background/60 max-w-2xl drop-shadow">
          subtitle
        </p>

        <Button className="bg-main text-background">
          Explore Our Products
        </Button>
      </div>
    </section>
  );
}
