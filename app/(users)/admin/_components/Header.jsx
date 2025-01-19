"use client";
import Image from "next/image";
import { FcBusinessman } from "react-icons/fc";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";
function Header() {
  const auth = useSelector((state) => state.auth);
  return (
    <header className="flex justify-between items-center p-4 shadow-sm border-b border-gray-200 dark:border-gray-500 dark:bg-gray-800">
      <Image src="/favicon.ico" alt="logo" width={60} height={60} />
      <input
        name="search"
        type="text"
        placeholder="Search"
        className="hidden md:block p-2 mx-2 flex-1 outline-none border-b-2 font-medium rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
      {/* <button className="bg-background-200 hover:bg-background-100 text-white font-bold py-2 px-4 rounded">
        Search
      </button> */}
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center mx-4">
          <span className="font-bold dark:text-white">
            {auth?.user?.name || "Avatar"}
          </span>
          <FcBusinessman size={30} className="mr-2" />
        </div>
        <IoIosNotificationsOutline
          size={45}
          color="gray"
          className="ml-2 px-2 border-l border-gray-200"
        />
      </div>
    </header>
  );
}

export default Header;
