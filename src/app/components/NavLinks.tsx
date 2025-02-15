import Link from "next/link";
import React, { FC } from "react";

interface NavLinksProps {
  closeMenu: () => void; // Define the closeMenu prop type
}

const NavLinks: FC<NavLinksProps> = ({ closeMenu }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:flex md:space-x-4">
      <Link href="/" className="nav-link" onClick={closeMenu}>
        Home
      </Link>
      <Link href={"/#services"} className="nav-link" onClick={closeMenu}>
        Services
      </Link>
      <Link href="/contact" className="nav-link" onClick={closeMenu}>
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
