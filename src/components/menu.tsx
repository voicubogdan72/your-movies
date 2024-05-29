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
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {isLoaded && user ? "Dashboard" : "Get Started"}
          </span>
        </Link>
        {isLoaded && user ? <UserButton afterSignOutUrl="/" /> : null}
      </aside>
    </header>
  );
};

export default Menu;
