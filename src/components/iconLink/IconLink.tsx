"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

// interface for NavbarProps
interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

//  NavItem component
const IconLink: React.FC<NavItemProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`w-fit bg-white/50 transition-all flex items-center justify-center duration-500 hover:bg-white/95 rounded-full p-1.5 ${
        isActive && "bg-white/95 shadow-lg"
      } `}
    >
      <Link className='w-full' href={href}>
        {children}
      </Link>
    </li>
  );
};

export default IconLink;
