import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon

const SearchField = () => {
  return (
    <div className="w-full md:w-[317px] h-[40px] flex border border-gray-300">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-3 py-2 text-sm bg-transparent text-black outline-none"
      />
      <div className="w-[40px] h-full bg-[#FB2E86] flex items-center justify-center cursor-pointer">
        <FiSearch size={20} color="#FFFFFF" />
      </div>
    </div>
  );
};

export default SearchField;
