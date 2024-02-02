'use client';

import { motion } from 'framer-motion';
import   Search   from '../components/Search';
import styles from '../styles';

import { navVariants } from '../utils/motion';
import Sidebar from '../components/Sidebar';
import WalletConnect from '../components/WalletConnect';


const Navbar = () => (
  <>
  
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-16 px-8 relative`}
  >
    
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
        <div className= "flex flex-row gap-3">
        <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <Search/>
        </div>
     
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
       Team  Codester
      </h2>
      <WalletConnect />
      

      {/* <Sidebar /> */}

    </div>
  </motion.nav></>
);

export default Navbar;
