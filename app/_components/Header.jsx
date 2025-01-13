"use client";
import Image from "next/image";
import ThemesMode from "./ThemesMode";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    { id: crypto.randomUUID(), title: "Home", route: "/" },
    { id: crypto.randomUUID(), title: "About", route: "/about" },
    { id: crypto.randomUUID(), title: "Services", route: "/services" },
    { id: crypto.randomUUID(), title: "Login", route: "/login" },
    { id: crypto.randomUUID(), title: "SignUp", route: "/signup" },
  ];
  return (
    <header className="shadow dark:shadow-gray-600 bg-white dark:bg-gray-900">
      <div className="flex justify-between gap-6 items-center py-2 px-4">
        <div>
          <Link href={"/"} className="flex gap-4 items-center">
            <Image
              src="/favicon.ico"
              alt="logo"
              loading="eager"
              width={70}
              height={70}
            />
            <span className="text-3xl font-semibold dark:text-white">
              Crafts
            </span>
          </Link>
        </div>
        <nav className="lg:flex-1">
          <div className="lg:hidden cursor-pointer dark:text-white">
            <FiMenu size={30} onClick={() => setOpenMenu(!openMenu)} />
          </div>
          <ul
            className={`${
              openMenu
                ? "left-0 z-10 bg-white dark:bg-gray-900"
                : "-left-full z-auto"
            } fixed lg:static top-0 w-full h-full lg:w-auto lg:h-auto flex items-center justify-center flex-col lg:flex-row gap-4 transition-all duration-500`}
          >
            <div
              onClick={() => setOpenMenu(!openMenu)}
              className="absolute lg:hidden right-10 top-10 cursor-pointer dark:text-white"
            >
              <TfiClose size={30} />
            </div>
            <li className="lg:flex-1 w-full text-center">
              <input
                type="text"
                id="search-navbar"
                className="w-[90%] lg:w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-primary-500"
                placeholder="Search..."
              />
            </li>
            {links.map((link) =>
              link.title === "Login" ? (
                <>
                  <li
                    key={`mode-${link.id}`}
                    className="flex justify-center items-center border-b-2 pb-6 w-[20%] lg:w-auto lg:border-b-0 lg:border-r-2 lg:py-2 lg:pr-6"
                  >
                    <ThemesMode />
                  </li>
                  <li
                    key={link.id}
                    onClick={() => setOpenMenu(!openMenu)}
                    className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300 hover:text-primary-500 ${
                      link.title === "Login" &&
                      "bg-primary-500 hover:bg-primary-600 hover:text-white rounded-full"
                    }`}
                  >
                    <Link href={link.route}>{link.title}</Link>
                  </li>
                </>
              ) : (
                <li
                  key={link.id}
                  onClick={() => setOpenMenu(!openMenu)}
                  className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300 hover:text-primary-500 ${
                    link.title === "Login" &&
                    "bg-primary-500 hover:bg-primary-600 hover:text-white rounded-full"
                  }`}
                >
                  <Link href={link.route}>{link.title}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
