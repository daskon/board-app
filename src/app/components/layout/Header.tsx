import React from "react";
import { MagnifyingGlassIcon, BellIcon, PlusIcon, FunnelIcon } from "@heroicons/react/24/outline";
import SearchBar from "../SearchBar";

const Header: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-end px-6">

      <div className="flex items-center space-x-5">

        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-sm">
          Create new board
          <PlusIcon className="w-5 h-5 ml-2" />
        </button>

        <div className="relative w-72">
          <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          <SearchBar />
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <FunnelIcon className="w-5 h-5 text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <BellIcon className="w-5 h-5 text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-semibold">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;