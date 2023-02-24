"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Links(){
    const router = useRouter();

    return(
        <div className="flex fixed w-full bottom-10 z-40">
            <div className="flex flex-row items-center justify-between w-fit mx-auto bg-purple-800/20 backdrop-blur-sm px-2 py-4">
                <Link href="/resume">
                    <img onClick={() => router.push(`/resume`)} className="link hover:hover" src="/resume.png" />
                </Link>
                <a target="_blank" href="https://www.linkedin.com/in/konstantin-stanmeyer/">
                    <img className="link hover:hover" src="/linkedin.png" />
                </a>
                <a target="_blank" href="https://github.com/konstantinstanmeyer">
                    <img className="link hover:hover" src="/github.png" />
                </a>
                <a target="_blank" href="https://dev.to/konstantinstanmeyer">
                    <img className="link hover:hover" src="/dev.png" />
                </a>
            </div>
        </div>
    )
}