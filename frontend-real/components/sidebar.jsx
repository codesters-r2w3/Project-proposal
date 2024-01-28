"use client"
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
// import SubMenu from "./SubMenu";
import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { GrAdd, GrAnnounce } from "react-icons/gr";
import { GiPoliceBadge } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";


import { AiOutlineAppstore, AiFillSetting } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { } from "react-icons/tb";
import { RiGalleryFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";


const Sidebar2 = ({ mainContent }) => {
    let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
    const [open, setOpen] = useState(isTabletMid ? false : true);
    const sidebarRef = useRef();
   

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, []);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    // const subMenusList = [
    //   {
    //     name: "build",
    //     icon: RiBuilding3Line,
    //     menus: ["auth", "app settings", "stroage", "hosting"],
    //   },
    //   {
    //     name: "analytics",
    //     icon: TbReportAnalytics,
    //     menus: ["dashboard", "realtime", "events"],
    //   },
    // ]


    const subMenusList = [
        {
            name: "GALLEY",
            icon: RiGalleryFill,
            menus: [{
                name: "Add Image",
                link: "auth1"
            }, {
                name: "app settings",
                link: "appsettings1"
            }
            ],
        },

    ];

    return (
        <div className="sm:flex hidden mr-10 relative">
        <div className="bg-white -mt-5 overflow-hidden flex">
            <>


                <div
                    onClick={() => setOpen(false)}
                    className={`md:hidden fixed inset-0  z-10 bg-black/50 ${open ? "block" : "hidden"
                        } `}
                ></div>
                <motion.div
                    ref={sidebarRef}
                    variants={Nav_animation}
                    initial={{ x: isTabletMid ? -250 : 0 }}
                    animate={open ? "open" : "closed"}
                    className="  text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
             md:relative fixed
             min-h-screen"
                >
                    <div className="flex items-center  gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
                        <div className='flex  justify-center items-center' to="/">
                            <Player
                                autoplay
                                speed={1.5}
                                loop

                                src="https://assets4.lottiefiles.com/private_files/lf30_er9xeac2.json"
                                style={{ height: "90px", width: "60px" }}
                            /> <span className=''></span>
                        </div>


                        <span className="text-sky-500  font-bold text-xl whitespace-pre overflow-x-hidden">Web3Watchdog</span>
                    </div>

                    <div className="flex flex-col  h-full">
                        <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
                            <li>
                                <div  className="link">
                                    <AiOutlineAppstore size={23} className="min-w-max" />
                                    Home
                                </div>
                            </li>
                            <li>
                                <div  className="link">
                                    <GrAdd size={23} className="min-w-max" />

                                    Report
                                </div>
                            </li>
                            <li>
                                <div  className="link">
                                    <GiPoliceBadge size={23} className="min-w-max" />
                                    police
                                </div>
                            </li>
                            <li>
                                <div  className="link">
                                    <GrAnnounce size={23} className="min-w-max" />
                                    Campaigns
                                </div>
                            </li>

                            {/* {(open || isTabletMid) && (
                                <div className="border-y py-5 border-slate-300 ">
                                    <small className="pl-3 text-slate-500 inline-block mb-2">
                                        Product categories
                                    </small>
                                    {subMenusList?.map((menu) => (
                                        <div key={menu.name} className="flex flex-col gap-1">
                                            <SubMenu data={menu} />
                                        </div>
                                    ))}
                                </div>
                            )} */}
                            <li>
                                <div  className="link">
                                    <RiAdminFill size={23} className="min-w-max" />
                                    Admin
                                </div>
                            </li>
                        </ul>

                    </div>
                    <motion.div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        animate={
                            open
                                ? {
                                    x: 0,
                                    y: 0,
                                    rotate: 0,
                                }
                                : {
                                    x: -10,
                                    y: -200,
                                    rotate: 180,
                                }
                        }
                        transition={{ duration: 0 }}
                        className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                    >
                        <IoIosArrowBack size={25} />
                    </motion.div>
                </motion.div>
                <div className="m-3  md:hidden  " onClick={() => setOpen(true)}>
                    <MdMenu size={25} />
                </div>
            </>
            <div className="container  mt-0">

                {mainContent}
            </div>
        </div>
        </div>
    );
};

export default Sidebar2;
