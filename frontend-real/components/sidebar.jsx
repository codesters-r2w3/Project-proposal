// Sidebar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// const Sidebar = ({ isOpen, onClose }) => {
//   return (
//     <motion.div
//       className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? '' : 'hidden'}`}
//       onClick={onClose}
//     >
//       <motion.div
//         className="fixed left-0 top-0 h-full w-64 bg-white p-4"
//         initial={{ x: '-100%' }}
//         animate={{ x: isOpen ? '0%' : '-100%' }}
//         transition={{ duration: 0.3 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Sidebar content goes here */}
//         <h3 className="text-xl font-bold mb-4">Sidebar Content</h3>
//         <ul>
//           <li>Link 1</li>
//           <li>Link 2</li>
//           {/* Add more links as needed */}
//         </ul>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Sidebar;
const Sbar =()=>{
  return (
    <div>
      {/* Your Sidebar JSX code goes here */}
      <Sidebar>
  <Menu>
    <SubMenu label="Charts">
      <MenuItem> Pie charts </MenuItem>
      <MenuItem> Line charts </MenuItem>
    </SubMenu>
    <MenuItem> Documentation </MenuItem>
    <MenuItem> Calendar </MenuItem>
  </Menu>
</Sidebar>;
    </div>
);

}
export default Sbar;