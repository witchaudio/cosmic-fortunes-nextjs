import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-4 lg:space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our mission is to become psychics. We&apos;re still figuring that out so we built a tool to help you find your destiny in the meantime. This is a personal project currently under development.
            </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <Image
            alt="Avatar"
            className="rounded-full"
            height={100}
            src="/s0undw1tch.png"
            layout="fixed"
            objectFit="cover"
            width={100}
          />
          <div className="space-y-1 text-center">
            <h3 className="font-semibold">witch@udio</h3>
            <p className="text-gray-500 dark:text-gray-400">CEO & Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
