"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="dark bg-black shadow">
      <div className="container mx-auto flex justify-start items-center p-4 gap">
        <div className="flex items-center">
          <Link href={"/"}>
            <Image src="/images/logo.png" alt="Logo" height={90} width={339} />
          </Link>
        </div>
        <div className="hidden md:block">
          <NavLinks closeMenu={closeMenu} />
        </div>

        <div>
          <button onClick={handleToggle} className="focus:outline-none">
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </div>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
