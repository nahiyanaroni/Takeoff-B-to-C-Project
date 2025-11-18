"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PiArmchairFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPlaneDeparture } from "react-icons/fa6";

import { GrDocumentSound } from "react-icons/gr";
import { FaWeixin } from "react-icons/fa6";
// import { FaChevronUp } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const baseColor = isHome
    ? isScrolled
      ? "bg-sky-200"
      : "bg-transparent"
    : isScrolled
    ? "bg-blue-200"
    : "bg-blue-200";

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full px-6 md:px-12 xl:px-40 border-b transition-all duration-500 ease-in-out z-50 ${baseColor} ${
        isScrolled ? "shadow-md border-gray-300" : "border-gray-400"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white text-black rounded-box w-52"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link href="/">
          <Image src="/Group.png" alt="Logo" height={48} width={192} className="h-12 w-auto" />
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul
          className={`menu menu-horizontal text-lg font-semibold px-1 gap-8 ${
            "text-gray-700"
          }`}
        >
          <li><Link href="/" className={pathname === "/" ? "text-yellow-600" : ""}> <FaPlaneDeparture />
 Flight</Link></li>
          <li><Link href="/about" className={pathname === "/about" ? "text-yellow-600" : ""}> <GrDocumentSound />Promotions</Link></li>
          <li><Link href="/contact" className={pathname === "/contact" ? "text-yellow-600" : ""}><PiArmchairFill />Business Class</Link></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <button
          className={`btn border-none rounded-xl flex items-center gap-2 shadow-sm ${
            isHome && !isScrolled
              ? "bg-transparent text-white"
              : "bg-blue-400 text-black"
          }`}
        >
       <FaWeixin className="text-4xl text-amber-700" />

          {/* <FaChevronUp
            className={isHome && !isScrolled ? "text-white" : "text-gray-600"}
          /> */}
        </button>
      </div>
    </div>
  );
}
