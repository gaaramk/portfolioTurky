"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, XCircle, ArrowUpRightIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleToggle = () => {
    setOpenSide((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About me", href: "#aboutme" },
    { label: "Services", href: "#services" },
    { label: "My Work", href: "#mywork" },
    { label: "Contact Me", href: "#contact", icon: <ArrowUpRightIcon /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center transition-all duration-300
        ${
          isScroll
            ? "bg-white dark:bg-neutral-900 shadow-sm backdrop-blur-lg bg-opacity-50"
            : ""
        }`}
        aria-label="Main navigation"
      >
        <Link href="#top" className="text-2xl font-bold">
          Turky
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="hover:text-emerald-800 transition">
              <Link href={link.href} className="flex items-center gap-1">
                {link.label}
                {link.icon && link.icon}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center gap-5">
          <ModeToggle />
          <button
            className="md:hidden"
            onClick={handleToggle}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <aside
          className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-rose-50 dark:bg-rose-900 flex flex-col gap-6 py-20 px-8 z-50 transition-transform duration-500
          ${openSide ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            onClick={handleToggle}
            className="absolute top-5 right-5"
            aria-label="Close menu"
          >
            <XCircle />
          </button>

          <ul className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-emerald-800 transition">
                <Link
                  href={link.href}
                  className="flex items-center gap-2"
                  onClick={handleToggle}
                >
                  {link.label}
                  {link.icon && link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </nav>
    </>
  );
};

export default Navbar;
