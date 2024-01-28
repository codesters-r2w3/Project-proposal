'use client';

import { motion } from 'framer-motion';
import './navbar.css';
import styles from '../../styles';
import { navVariants } from '../utils/motion';
import Sidebar from '../../../../frontend-real/components/sidebar';

const Navbar = () => (
  <>
    <Sidebar /> {/* Include the Sidebar component */}
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white"></h2>
        <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain" />
      </div>
    </motion.nav>
  </>
);

export default Navbar;