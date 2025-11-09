"use client";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="text-gray-800 body-font shadow-md bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-2xl font-bold tracking-wide">
            Flower<span className="text-pink-500">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-5 text-base md:ml-auto">
          <Link href="/" className="hover:text-pink-500 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-pink-500 transition-colors">About</Link>
          <Link href="/products" className="hover:text-pink-500 transition-colors">Products</Link>
          <Link href="/review" className="hover:text-pink-500 transition-colors">Review</Link>
          <Link href="/contact" className="hover:text-pink-500 transition-colors">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-7 mt-4 md:mt-0 text-black ml-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-heart-fill cursor-pointer transition-transform hover:scale-110 hover:text-pink-500"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-cart-fill cursor-pointer transition-transform hover:scale-110 hover:text-pink-500"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-person-fill w-8 h-8 cursor-pointer transition-transform hover:scale-110 hover:text-pink-500"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>
        </div>
      </div>
    </header>
  );
}
