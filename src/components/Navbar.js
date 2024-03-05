"use client";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/utils/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = ({ primary }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const { isMediumDevice } = useDevice();
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    if (!isMediumDevice) {
      setOpenMenu(false);
    }
  }, [isMediumDevice]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <nav
      className={cn(
        "",
        primary ? "bg-primary" : "bg-transparent",

        isSticky ? "fixed top-0 z-50 bg-primary w-full" : ""
      )}
    >
      <div className="max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={"/logo.svg"}
            width={120}
            height={20}
            className="h-8 fill-white"
            alt="at jogja Logo"
          />
        </Link>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primary focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={cn(
            "hidden w-full md:block md:w-auto",
            openMenu ? "block" : "hidden"
          )}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className={cn(
                  "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:hover:font-bold md:p-0",
                  openMenu ? "text-black" : "text-white"
                )}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#trips"
                className={cn(
                  "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:hover:font-bold md:p-0",
                  //
                  openMenu ? "text-black" : "text-white"
                )}
              >
                Trips
              </Link>
            </li>
            <li>
              <Link
                href="#destination"
                className={cn(
                  "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:hover:font-bold md:p-0",
                  openMenu ? "text-black" : "text-white"
                )}
              >
                Destination
              </Link>
            </li>
            <li>
              <Link
                href="#guide"
                className={cn(
                  "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:hover:font-bold md:p-0",
                  openMenu ? "text-black" : "text-white"
                )}
              >
                Guide
              </Link>
            </li>
            <li>
              <Link
                href="#stories"
                className={cn(
                  "block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:hover:font-bold md:p-0",
                  openMenu ? "text-black" : "text-white"
                )}
              >
                Stories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
