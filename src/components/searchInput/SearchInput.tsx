import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchInput: React.FC = () => {
  return (
    <div className='flex items-center bg-white/50 justify-between rounded-full py-1 px-3'>
      <input
        type='text'
        placeholder='Search'
        className='w-full bg-transparent p-1 outline-none border-none'
      />
      <RiSearch2Line className='text-2xl font-bold cursor-pointer transition-all duration-300 hover:scale-110' />
    </div>
  );
};

export default SearchInput;
