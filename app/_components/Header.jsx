"use client";
import Image from "next/image";
import ThemesMode from "./ThemesMode";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutReducer } from "../_rtk/slices/authReducers";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
  const auth = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false);
  const [userTab, SetUserTab] = useState(false);
  const dipatch = useDispatch();
  const links = [
    { id: crypto.randomUUID(), title: "Home", route: "/" },
    { id: crypto.randomUUID(), title: "About", route: "/about" },
    { id: crypto.randomUUID(), title: "Services", route: "/services" },
    // { id: crypto.randomUUID(), title: "Login", route: "/login" },
    // { id: crypto.randomUUID(), title: "SignUp", route: "/signup" },
  ];

  const handelLogout = () => {
    dipatch(logoutReducer());
    setOpenMenu(!openMenu);
  };
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

            {links.map((link) => (
              <li
                key={link.id}
                className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300 hover:text-primary-500`}
              >
                <Link onClick={() => setOpenMenu(!openMenu)} href={link.route}>
                  {link.title}
                </Link>
              </li>
            ))}
            <li className="flex justify-center items-center border-b-2 pb-6 w-[20%] lg:w-auto lg:border-b-0 lg:border-r-2 lg:py-2 lg:pr-6">
              <ThemesMode />
            </li>
            {auth.user !== null ? (
              <>
                {/* <li className="order-first lg:order-none flex flex-col justify-center items-center mx-6 text-primary-600 dark:text-primary-400">
                  <FaUserCircle size={30} />
                  <span className="font-semibold">
                    {auth?.user?.name || "user"}
                  </span>
                </li> */}
                <div className="relative order-first lg:order-none">
                  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white dark:border-gray-800 dark:bg-gray-900">
                    <a
                      href="#"
                      className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-e-gray-800 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    >
                      user
                    </a>
                    <button
                      onClick={() => SetUserTab(!userTab)}
                      className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    >
                      <span className="sr-only">Menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`${
                      !userTab && "hidden"
                    } absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg dark:border-gray-800 dark:bg-gray-900`}
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        role="menuitem"
                      >
                        <div className="flex items-center gap-6">
                          <FaUserCircle size={20} />
                          <span>{auth?.user?.name || "user"}</span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <li
                  className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300`}
                >
                  <Link
                    onClick={handelLogout}
                    href={"/login"}
                    className="flex gap-2 items-center justify-center"
                  >
                    Logout
                    <FiLogOut />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300 bg-primary-500 hover:bg-primary-600 hover:text-white rounded-full`}
                >
                  <Link onClick={() => setOpenMenu(!openMenu)} href={"/login"}>
                    Login
                  </Link>
                </li>
                <li
                  className={`text-gray-800 font-medium dark:text-gray-200 px-6 py-2 transition-colors duration-300 bg-primary-500 hover:bg-primary-600 hover:text-white rounded-full`}
                >
                  <Link onClick={() => setOpenMenu(!openMenu)} href={"/signup"}>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
