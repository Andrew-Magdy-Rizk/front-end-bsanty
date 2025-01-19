"use client";
import ThemesMode from "@/app/_components/ThemesMode";
import { logoutReducer } from "@/app/_rtk/slices/authReducers";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaShopify } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

function SlideMenu() {
  const auth = useSelector((state) => state.auth);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <aside
      className={`fixed min-h-screen md:sticky z-10 md:flex col-span-3 bg-white dark:bg-gray-800 w-[200px] md:w-auto ${
        openMenu ? "right-[calc(100%-199px)]" : "right-full"
      } duration-500`}
    >
      <div className="hidden lg:flex w-16 flex-col justify-between border-e dark:border-gray-500">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg text-xs text-gray-600">
              {auth?.user?.name[0] || "A"}
            </span>
          </div>

          <div className="border-t border-gray-100 dark:border-gray-500">
            <div className="px-2">
              <div className="py-4">
                <a
                  href="#"
                  className="group relative flex justify-center rounded bg-blue-50 dark:bg-gray-400 px-2 py-1.5 text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Dashboard
                  </span>
                </a>
              </div>

              <ul className="space-y-1 border-t border-gray-100 dark:border-gray-500 pt-4">
                <li>
                  <Link
                    href="/admin/products"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Teams
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Calendar
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/admin/products"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <FaShopify />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      products
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin/categories"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <MdCategory />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      categories
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Account
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-500 p-2">
          <form action="#">
            <Link
              href="/login"
              onClick={() => dispatch(logoutReducer())}
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </Link>
          </form>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col justify-between border-e dark:border-gray-500">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute cursor-pointer md:hidden top-full -right-10 z-10 bg-gray-100 dark:bg-gray-700 rounded-2xl pl-10 py-2 px-2 dark:text-white"
        >
          <MdOutlineMenuOpen size={30} />
        </div>
        <div className="px-4 py-6">
          <ul className="mt-14 space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white px-4 py-2 text-sm font-medium text-gray-700"
              >
                Dashboard
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white hover:text-gray-700">
                  <span className="text-sm font-medium"> Teams </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
                    >
                      Banned Users
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
              >
                Calendar
              </a>
            </li>
            <li>
              <Link
                href="/admin/products"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
              >
                products
              </Link>
            </li>
            <li>
              <Link
                href="/admin/categories"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 dark:text-white hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700"
              >
                categories
              </Link>
            </li>
          </ul>
        </div>
        <div className="mx-auto py-6  sticky inset-x-0 bottom-0">
          <ThemesMode />
        </div>
        <div className="block md:hidden sticky inset-x-0 bottom-0 border-t border-gray-100 dark:border-gray-500 p-2">
          <form action="#">
            <Link
              href="/login"
              onClick={() => dispatch(logoutReducer())}
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </Link>
          </form>
        </div>
      </div>
    </aside>
  );
}

export default SlideMenu;
