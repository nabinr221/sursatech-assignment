import React from "react";
import IconLink from "../iconLink/IconLink";
import { RiHome5Line } from "react-icons/ri";
import SearchInput from "../searchInput/SearchInput";

const Navbar: React.FC = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <IconLink href='/'>
          <RiHome5Line className='text-2xl' color='black' />
        </IconLink>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
