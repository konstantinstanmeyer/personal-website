"use client"

import { useEffect, useState } from "react";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import Image from "next/image";

export default function Links(){
    const [isTop, setIsTop] = useState(false);
    const y = useScrollPosition();

    useEffect(() => {
        const menu = document.getElementById("menu");
        const menuBottom = menu.getBoundingClientRect().bottom;

        console.log(menuBottom);
        console.log(menu.getBoundingClientRect());
        console.log(y)

        if (menuBottom > 0){
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }, [y])

    return(
        <div id="links" className={`flex font-outfit font-semibold tracking-wide  fixed ${isTop ? "" : "active"} bg-[rgb(15,15,15)] backdrop-blur-md sm:backdrop-blur-sm w-full bottom-0 font-outfit font-semibold sm:bottom-auto top-auto sm:top-0 z-40 py-3`}>
            <div className={`flex flex-row items-center w-full h-fit`}>
                <a target="_blank" href="https://github.com/konstantinstanmeyer" className="ml-2">
                    <Image alt="github" src="/github.png" width={40} height={40} className={`link rounded-full ml-3 sm:block hidden `} />
                </a>
                <a className="text-purple-400 sm:text-purple-600 ml-auto mx-auto text-base sm:text-xl sm:mx-3 sm:ml-auto px-2 hover:text-purple-500 transition-all duration-300" href="#one">
                    Top
                </a>
                <a href="#two" className="text-purple-400 ease-in-out sm:text-purple-600 mx-auto text-base sm:text-xl sm:mx-3 px-2 hover:text-purple-500 transition-all duration-300">
                    About
                </a>
                <a href="#three" className="text-purple-400 sm:text-purple-600 mx-auto text-base sm:text-xl sm:mx-3 px-2 hover:text-purple-500 transition-all duration-300">
                    Skills
                </a>
                <a href="#four" className="text-purple-400 sm:text-purple-600 mx-auto text-base sm:text-xl sm:mx-3 px-2 hover:text-purple-500 transition-all duration-300">
                    Projects
                </a>
                <a href="#five" className="text-purple-400 sm:text-purple-600 text-base sm:text-xl mx-auto sm:mx-3 px-2 sm:mr-8 hover:text-purple-500 transition-all duration-300">
                    Contact
                </a>
            </div>
        </div>
    )
}