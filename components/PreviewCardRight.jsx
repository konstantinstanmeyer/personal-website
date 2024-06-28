"use client"

import Image from "next/image";

export default function ProjectCardRight({ project }){
    const { name, description, projectUrl, repository, languages, image, util } = project;

    return (
        <div className="flex flex-col md:flex-row items-center relative w-[90%] md:w-[65%] ml-auto mr-auto mb-8 md:mb-32">
            <div className="md:block hidden absolute right-0">
                <div className="w-[55%] h-full opacity-70 z-0 ml-auto">
                    <img className="rounded-sm aspect-video" src={image} />
                </div>
            </div>
            <div className="md:w-[55%] w-[85%] font-outfit flex flex-col z-10">
                <h3 className="text-purple-200 font-semibold text-xl relative mb-2">{name}</h3>
                <div className="bg-purple-900 pl-5 pt-4 pb-4 rounded-sm">
                    <p className="text-purple-300 font-light pr-4 text-xs md:text-sm">{description}</p>
                </div>
                <div className="mt-2 w-[70%]">
                    {languages.map((language, i) => 
                        <p className="text-purple-400 text-xs" key={"language" + i}>{language}</p>
                    )}
                </div>
                <div className="w-fit flex flex-row mt-2">
                    <a target="_blank" href={repository}>
                        <img className="invert-logo w-4 hover:scale-110 transition-translate duration-300" src="/github.png" />
                    </a>
                    {projectUrl ? <a target="_blank" href={projectUrl}>
                        <img className="invert-logo w-4 ml-2 hover:scale-110 transition-translate duration-300" src="/external-link.png" />
                    </a> : null}
                </div>
            </div>
        </div>
    )
}