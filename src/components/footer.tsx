import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 dark:bg-black dark:border-gray-800 flex flex-wrap items-center justify-center">
      <div className="container flex flex-wrap items-center justify-center gap-4 px-4 py-8 md:py-10 lg:px-6 xl:px-8 2xl:px-10">
        <nav className="flex justify-center items-center gap-4 text-center">
          <Link className="text-sm font-semibold tracking-wider text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/">Home</Link>
          <Link className="text-sm font-semibold tracking-wider text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/about">About</Link>
          <Link className="text-sm font-semibold tracking-wider text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center justify-center gap-2 md:gap-4 xl:gap-6">
          <Link href="https://twitter.com/witchaudio_" className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/witchaudio" className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
            <span className="sr-only">GitHub</span>
            <GitHubIcon className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          © 2024 witch@udio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GitHubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );
}
