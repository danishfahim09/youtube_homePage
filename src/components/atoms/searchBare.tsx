'use client';

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-[200px]   sm:w-[200px] md:w-[300px] lg:min-w-[470px]    mx-auto flex  rounded-l-full  overflow-hidden" >
      <input
        type="text"
        placeholder="Search"
        className="w-full   py-1 px-2 text-xs   sm:text-xs sm:px-2 sm:py-1 md:text-sm md:px-2 md:py-2 text-gray-600 font-roboto dark:text-gray-200 lg:px-4 lg:py-2 lg:text-sm focus:outline-none bg-gray-100 dark:bg-black"
      />
      <div className="flex items-center bg-gray-200 dark:bg-[#FFFFFF14] pl-2 pr-3  rounded-r-full   ">
        <Search className="text-gray-400 stroke-[1.5px] dark:text-gray-200  w-3  h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-6 lg:h-6  hover:text-gray-400 " />
      </div>
    </div>
  );
}