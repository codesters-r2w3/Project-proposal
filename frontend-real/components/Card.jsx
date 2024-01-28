'use client'
import React from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import Image from "next/image";
import img1 from '../public/event1.jpg'
import { useRouter } from 'next/navigation';
import { withRouter } from 'next/router';
import {  useStateContext } from "../context/eventContext.js";
import { useContext } from "react";
const Example = ({name2 , imageUrl1 , imageUrl2 ,id , description , location , organizer}) => {
  const { setProps } = useStateContext();
  useEffect(() => {
    // Store the props in the context when the component mounts
    setProps({ name2, imageUrl1, imageUrl2, id, description, location, organizer });
  }, []);

  return (
    <div className="grid w-full border-[#1a232e] place-content-center bg-[#1a232e] from-#1a232e to-violet-500 px-4 py-4 text-slate-900">
      <TiltCard imageUrl={img1}  name1={name2} setProps={setProps}
      id={id} description={description} location={location} organizer={organizer}
      />
    </div>
  );
};
import Link from 'next/link'
const TiltCard = ({setProps , name1, imageUrl, imageUrl2 ,id , description , location , organizer }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const handleCardClick = () => {
    // Set context values when the card is clicked
    //const { setProps } = useStateContext();
    setProps({ name1, imageUrl, imageUrl2, id, description, location, organizer });
    // Additional logic if needed
  };
  return (
  <Link href={`/details/${id}`}>
    <motion.div
    onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-72 rounded-xl  from-[#05100f] to-violet-300 overflow-hidden"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg overflow-hidden"
      >
        <Image
          fill={true}
          src={imageUrl}
          alt="Tilted Image"
          style={{
            objectFit: "cover",
          }}
          // height= {300}
          // width= {300}
        />
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-center text-2xl font-bold text-white"
        >
          
          {name1}
        </p>
      </div>
    </motion.div>
    </Link>
  );
  
};

export default Example;