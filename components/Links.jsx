"use client"

import { useEffect, useState } from "react";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";
import Image from "next/image";

export default function Links(){
    const [isTop, setIsTop] = useState(false);
    const y = useScrollPosition();

    useEffect(() => {
        if (y === 0){
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    }, [y])

    return(
        <div className={`flex fixed ${isTop ? null : "bg-black-20 backdrop-blur-sm"} w-full sm:bottom-[none] sm:top-0 z-40 py-3`}>
            <div className="flex flex-row items-center justify-between w-full h-fit">
                <a target="_blank" href="https://github.com/konstantinstanmeyer" className="ml-2">
                    <Image alt="github" src="/github.png" width={40} height={40} className="link rounded-full ml-3 sm:block hidden" />
                </a>
                <a className="text-purple-600 ml-auto bebas text-xl sm:mx-3 px-2 hover:text-purple-500 transition-all duration-300" href="#one">
                    Top
                </a>
                <a href="#two" className="text-purple-600 sm:mx-3 bebas text-xl mx-auto px-2 hover:text-purple-500 transition-all duration-300">
                    About
                </a>
                <a href="#four" className="text-purple-600 bebas text-xl mx-3 px-2 hover:text-purple-500 transition-all duration-300">
                    Projects
                </a>
                <a href="#three" className="text-purple-600 bebas text-xl mx-3 px-2 hover:text-purple-500 transition-all duration-300">
                    Skills
                </a>
                <a href="#five" className="text-purple-600 bebas text-xl ml-3 px-2 mr-6 hover:text-purple-500 transition-all duration-300">
                    Contact
                </a>
            </div>
        </div>
    )
}