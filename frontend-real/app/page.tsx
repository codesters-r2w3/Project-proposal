'use client'
import Image from "next/image";
import   Navbar   from '../components/Navbar';
import Hero from '../sections/Hero';
import Grid from '../components/Grid';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

import img1 from '../public/menu.svg'
export default function Home() {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div className="bg-primary-black overflow-hidden flex-col">
           <button
        className="fixed z-30 top-4 right-4 pr-10 pt-10"
        onClick={toggleSidebar}
      >
        <Image  alt =" sidebar" src={img1}width={50} height={50} />
        
      </button>
      
      { isSidebarVisible && <Sidebar setSidebarVisibility={setSidebarVisibility} />}
   <Navbar />

   <div className="sm:flex hidden mr-10 relative">
        {/* <Sidebar/> */}
      </div>

   <Hero/>
   
   <Grid/>
  
    
      </div>
    
  );
}
