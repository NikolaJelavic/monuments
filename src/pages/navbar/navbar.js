import React, { useState } from "react";
import Link from "next/link";
// import Rest from '@/components/Rest/index';
import Name1 from "../../components/Name1/index";
import Name2 from "../../components/Name2/index";





export default function Navbar() {
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    setIsDropdownOpen(false);
  };

  const handleDropdown1Enter = () => {
    setIsDropdownOpen1(true);
  };

  const handleDropdown1Leave = () => {
    setIsDropdownOpen1(false);
  };

  const handleDropdown2Enter = () => {
    setIsDropdownOpen2(true);
  };

  const handleDropdown2Leave = () => {
    setIsDropdownOpen2(false);
  };

  return (
    <ul className="bg-red-600 flex flex-wrap justify-around p-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-serif ">
      <li>
        <Link
          href="/"
          className="link-underline hover:after:link-underline link-underline-black  transition-bg ease-in-out hover:text-red-700 hover:text-stroke "
        >
          Home
        </Link>
      </li>
      <li
        onMouseEnter={handleDropdown1Enter}
        onMouseLeave={handleDropdown1Leave}
      >
        <div className="hover:text-red-700 hover:text-stroke">
          <span className="cursor-pointer">Menu&#x25BE;</span>
          {isDropdownOpen1 && <Name1 />}
        </div>
      </li>
      {/* <li>
        <Link href="/monuments">Monuments</Link>
      </li> */}
      <li
        onMouseEnter={handleDropdown2Enter}
        onMouseLeave={handleDropdown2Leave}
      >
        <div className="hover:text-red-700 hover:text-stroke">
          <span className="cursor-pointer">Rest&#x25BE;</span>
          {isDropdownOpen2 && <Name2 />}
        </div>
      </li>
      <li>
        <Link
          href="/contact"
          className="link-underline hover:after:link-underline link-underline-black  transition-bg ease-in-out hover:text-red-700 hover:text-stroke"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

// target="_blank" ▾
