"use client";

import React from "react";
import { useTaskStore } from "../store/useTaskStore";

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search tasks..."
      className="w-full pl-10 md:w-1/2 p-2 bg-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;