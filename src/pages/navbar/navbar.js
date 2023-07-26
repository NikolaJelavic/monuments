// import Link from 'next/link'

// export default function Navbar() {
//   return (
//     <ul className="bg-red-600 flex flex-wrap justify-around p-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono" >
//       <li>
//         <Link href="/">Home</Link>
//       </li>
//       <li>
//         <Link href="/monuments">Monuments</Link>
//       </li>
//       <li>
//         <Link href="/quotes">Quotes</Link>
//       </li>
//       <li>
//         <Link href="/quiz">Quiz</Link>
//       </li>
//       <li>
//         <Link href="/news">News</Link>
//       </li>
//       <li>
//         <Link href="/ipsum">Ipsum</Link>
//       </li>
//       <li>
//         <Link href="/contact">Contact</Link>
//       </li>
//   </ul>
//   );
// }


import React, { useState } from 'react';
import Link from 'next/link';
import Rest from '@/components/Rest/index';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle dropdown item click
  const handleItemClick = (url) => {
    setIsDropdownOpen(false);
    // Use router.push here if you want to navigate to the URL directly
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="bg-red-600 flex flex-wrap justify-around p-2 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/monuments">Monuments</Link>
      </li>
      {/* <li>
        <Link href="/quotes">Quotes</Link>
      </li>
      <li>
        <Link href="/quiz">Quiz</Link>
      </li> */}
      {/* Show the News dropdown */}
      <li>
        <div className="relative">
          <span className="cursor-pointer" onClick={toggleDropdown}>
            Rest &#x25BE; 
          </span>
          {isDropdownOpen && <Rest />}
        </div>
      </li>
      {/* <li>
        <Link href="/ipsum">Ipsum</Link>
      </li> */}
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
