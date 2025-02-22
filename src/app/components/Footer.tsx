import Link from "next/link";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Potter&apos;s House Oregon City</p>
        <nav className="mt-2">
          <Link href="/contact" className="text-gray-300 hover:text-white mr-4">
            Contact
          </Link>
          {/* Example */}
        </nav>
        <p className="mt-2 text-sm text-gray-400">
          {/* Optional: Add a small tagline or mission statement */}
          The Potter&apos;s House Church Oregon City
        </p>
      </div>
    </footer>
  );
};

export default Footer;
