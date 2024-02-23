"use client";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "@/app/components/MobileNav";

function Navbar() {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="flex justify-between py-4 px-8 items-center bg-purple-600 text-white">
      <h2 className="text-white font-bold text-lg md:text-xl">
        RandomGenerate.io 🍿
      </h2>
      <div>
        <ul className="hidden md:flex gap-8 items-center justify-center">
          <Link className="hover:underline cursor-pointer" href="/">
            Home
          </Link>
          <Link className="hover:underline cursor-pointer" href="/how-to-use">
            How To Use
          </Link>
          <Link className="hover:underline cursor-pointer" href="/about-us">
            About Us
          </Link>
          <Link className="hover:underline cursor-pointer" href="/contact-us">
            Contact Us
          </Link>
          <Link
            className="bg-orange-600 hover:bg-orange-500 py-2 transition-colors px-4 rounded-md cursor-pointer"
            href="/"
          >
            Find a Movie
          </Link>
        </ul>

        <div className="lg:hidden flex flex-col justify-center gap-1 cursor-pointer">
          {clicked ? (
            <div
              className="gap-1 flex flex-col justify-center transition-all"
              onClick={() => setClicked((prev) => !prev)}
            >
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-white rounded-full"></div>
            </div>
          ) : (
            <MobileNav setClicked={setClicked} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
