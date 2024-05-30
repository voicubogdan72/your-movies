"use client";
import Link from "next/link";
import { Menu as MenuIcon } from "lucide-react";
import { useUser, UserButton } from "@clerk/nextjs";
import { useState } from "react";

const Menu = () => {
  const { isLoaded, user } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold">Your</p>
        <span>movie</span>
      </aside>
      <nav className="md:hidden">
        <MenuIcon
          className="text-white dark:text-gray-300 cursor-pointer"
          onClick={toggleMenu}
        />
      </nav>
      <nav
        className={`absolute left-0 top-full w-full bg-black/40 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center gap-4 list-none py-4">
          <li>
            <Link href="/add-movie">Add movie</Link>
          </li>
          <li>
            <Link href="/">See reviews</Link>
          </li>
          <li>
            <Link href="/your-movies">Your list</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="/add-movie">Add movie</Link>
          </li>
          <li>
            <Link href="/">See reviews</Link>
          </li>
          <li>
            <Link href="/your-movies">Your list</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
        >
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20">
            {isLoaded && user ? "Dashboard" : "Get Started"}
          </span>
        </Link>

        {isLoaded && user ? <UserButton afterSignOutUrl="/" /> : null}
      </aside>
    </header>
  );
};

export default Menu;
