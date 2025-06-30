"use client";
import { ArrowUpRightIcon, Menu, XCircle } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openSide, setOpenSide] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleToggle = () => {
    setOpenSide(!openSide);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
        flex justify-between items-center z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white dark:bg-neutral-900 shadow-sm backdrop-blur-lg bg-opacity-50 "
            : ""
        }`}
      >
        <Link href="#top">
          <h1 className="font-bold text-2xl">Turky</h1>
        </Link>

        <ul className="hidden md:flex items-center gap-5">
          {["Home", "About me", "Services", "My Work"].map((item, i) => (
            <li key={i} className="hover:text-emerald-800">
              <Link href={`#${item.toLowerCase().replace(/\s/g, "")}`}>
                {item}
              </Link>
            </li>
          ))}
          <li className="hover:text-emerald-800">
            <Link href="#contact" className="flex items-center">
              Contact Me
              <ArrowUpRightIcon />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-5">
          <ModeToggle />
          <button className="md:hidden cursor-pointer" onClick={handleToggle}>
            <Menu />
          </button>
        </div>

        <ul
          className={
            `md:hidden flex flex-col gap-5 py-20 px-10 fixed top-0 bottom-0 w-64 h-screen bg-rose-50 dark:bg-rose-900 transition duration-500 z-50` +
            (openSide ? " right-0" : " right-[-100%]")
          }
        >
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={handleToggle}
          >
            <XCircle />
          </div>

          {["Home", "About me", "Services", "My Work"].map((item, i) => (
            <li key={i} className="hover:text-emerald-800">
              <Link
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                onClick={handleToggle}
              >
                {item}
              </Link>
            </li>
          ))}

          <li className="hover:text-emerald-800">
            <Link
              href="#contact"
              className="flex items-center"
              onClick={handleToggle}
            >
              Contact Me
              <ArrowUpRightIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
