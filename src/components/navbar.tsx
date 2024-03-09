
import Link from "next/link"


export default function navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm translate-y-0/transition translate-y-full/transition duration-300 ease-in-out dark:bg-black">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link className="flex items-center font-semibold" href="/">
            Cosmic Fortunes
          </Link>
          <div className="flex items-center space-x-4">
            <Link
            
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-950 dark:focus:bg-gray-50 dark:focus:text-gray-950 dark:data-[active]:bg-gray-100/50 dark:data-[state=open]:bg-gray-100/50"
              href="/cards"
            >
              Cards
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-950 dark:focus:bg-gray-50 dark:focus:text-gray-950 dark:data-[active]:bg-gray-100/50 dark:data-[state=open]:bg-gray-100/50"
              href="/tarot"
            >
              Tarot
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:hover:bg-gray-50 dark:hover:text-gray-950 dark:focus:bg-gray-50 dark:focus:text-gray-950 dark:data-[active]:bg-gray-100/50 dark:data-[state=open]:bg-gray-100/50"
              href="/reading"
            >
              Reading
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
