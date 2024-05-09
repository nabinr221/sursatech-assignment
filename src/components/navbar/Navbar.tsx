import React from "react";
import IconLink from "../iconLink/IconLink";
import { MdOutlineDashboard } from "react-icons/md";
import { TbFilterCog } from "react-icons/tb";

import SearchInput from "../searchInput/SearchInput";

const Navbar: React.FC = () => {
  return (
    <div className='flex items-center gap-2 justify-between'>
      <div className="flex gap-2 sm:gap-5 items-center ">
        <IconLink href='#'>
          <MdOutlineDashboard className='text-2xl' color='black' />
        </IconLink>
        <IconLink href='#'>
          <TbFilterCog className='text-2xl' color='black' />
        </IconLink>
      </div>
      <div>
        <SearchInput />
      </div>
    </div>
  );
};

export default Navbar;
