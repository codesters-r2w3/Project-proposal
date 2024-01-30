import Image from "next/image";
import   Navbar   from '../components/Navbar';
import Hero from '../sections/Hero';
import Grid from '../components/Grid'

//import Sidebar from '../components/sidebar'
import Event from '../components/EventCreationForm'

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
   <Navbar />
   <div className="sm:flex hidden mr-10 relative">
        {/* <Sidebar/> */}
      </div>

   <Hero/>
   
   <Grid/>
  
    <Event/>
      </div>
    
  );
}
