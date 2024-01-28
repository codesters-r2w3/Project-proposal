'use client';
import './hero.css';
import Marquee from "react-fast-marquee";
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import   Search   from '../components/Search';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
      <div className= " flex mt-10 ">
        {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
       */}
       <div className= "w-[500px] h-[0px] z-20  object-contain">
       <Player
     
     src='/astronot.json'
     className="player "
     loop
     autoplay
   />
   
       </div>
    
        </div>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Book now !!
          
        </motion.h1>
      
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
         
        </motion.div>
      </div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] rounded-[140px] z-[0] -top-[30px]" />
        
        <img
          src="/cover.png"
          alt="."
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="max-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
        

            {/* <img
              src="/stamp.png"
              alt="."
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            /> */}
          </div>
        </a>
      </motion.div>
    </motion.div>
    <Marquee
            
            gradientWidth={50}
            gradientColor="rgb(26,35,46)"
            speed={100}
        >
            <h2 className="text-white font-bold text-5xl mb-4 py-10">Sale ends soon !!</h2>
            <h2 className="text-white font-bold text-5xl mb-4 py-10"><div className="w-[300px]"> </div></h2>
            <h2 className="text-white font-bold text-5xl mb-4 py-10">Hurry now !!</h2>
        </Marquee>
  </section>
);

export default Hero;
