import React from "react";
import IconLink from "../iconLink/IconLink";
import { PiPottedPlant } from "react-icons/pi";
import { RiHome5Line } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";

const Sidebar: React.FC = () => {
  return (
    <div className='w-full px-2 py-3 bg-white/40 backdrop-blur-sm rounded-full'>
      <nav className='my-1'>
        <ul className='flex flex-col justify-center items-center gap-5'>
          <IconLink href='/'>
            <RiHome5Line className='text-2xl' color='black' />
          </IconLink>
          <IconLink href='/products'>
            <PiPottedPlant className='text-2xl' color='black' />
          </IconLink>
          <IconLink href='/carts'>
            <IoCartOutline className='text-2xl' color='black' />
          </IconLink>
          <IconLink href='#'>
            <LuSettings2 className='text-2xl' color='black' />
          </IconLink>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
