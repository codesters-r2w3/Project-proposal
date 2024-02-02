
import React from 'react';
import Link from 'next/link';

function Sidebar({ setSidebarVisibility }) {
  const handleItemClick = (path) => {
    // Close the sidebar before navigating
    setSidebarVisibility(false);
  };

  return (
    <div
      className="fixed  z-20 top-0 left-0 h-full w-64 bg-black text-white transform translate-x-0 transition-transform duration-300 ease-in-out "
    >
      <ul className="space-y-2 px-4 py-2">
        <li className="hover:bg-gray-700 px-2 py-1 rounded-md" onClick={() => handleItemClick('/')}>
          <Link href="/">Home</Link>
        </li>
        <li className="hover:bg-gray-700 px-2 py-1 rounded-md" onClick={() => handleItemClick('/Dashboard')}>
          <Link href="/form">Register new event</Link>
        </li>
        <li className="hover:bg-gray-700 px-2 py-1 rounded-md" onClick={() => handleItemClick('/')}>
          <Link href="/qr-reader">Verify ticket</Link>
        </li>
        <li className="hover:bg-gray-700 px-2 py-1 rounded-md" onClick={() => handleItemClick('/')}>
          <Link href="/tickets">My tickets</Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Sidebar;