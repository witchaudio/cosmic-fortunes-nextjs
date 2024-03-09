import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-12 overflow-hidden star-galaxy sm:min-h-[80vh] h-[50vh] sm:h-auto">
       <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border">
        <Image
          alt="Hero"
          src="/pexels-hero.jpg"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>

      <div className="z-10 w-full px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Cosmic Fortunes</h1>
        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
          Discover your destiny. Let the wisdom of the cards guide you.
        </p>
        <Link
          href="/reading"
          className="inline-flex mt-4 h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
        >
          Full Reading
        </Link>
      </div>
    </section>
  );
}
