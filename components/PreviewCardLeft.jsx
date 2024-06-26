"use client"

import Image from "next/image";

export default function ProjectCardLeft({ project }){
    const { name, description, projectUrl, repository, languages, image, util } = project;

    return (
        <div className="flex flex-col md:flex-row items-center justify-center relative w-[90%] md:w-[65%] ml-auto mr-auto mb-8 md:mb-32">
            <div className="md:block hidden">
                <div className="w-[55%] h-full opacity-70">
                    <img className="rounded-sm" src={image} />
                </div>
            </div>
            <div className="md:absolute font-outfit right-0 md:w-[55%] w-[85%] flex flex-col">
                <h3 className="text-purple-200 font-semibold text-xl relative ml-auto text-right mb-2">{name}</h3>
                <div className="bg-purple-900 pl-5 pt-4 pb-4 rounded-sm">
                    <p className="text-purple-300 font-light pr-4 text-xs md:text-sm text-right">{description}</p>
                </div>
                <div className="mt-2 w-[70%] ml-auto">
                    {languages.map((language, i) => 
                        <p className="text-purple-400 text-right text-xs float-right" key={"language" + i}>{language}</p>
                    )}
                </div>
                <div className="w-fit ml-auto flex flex-row mt-2">
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

// return (
//     <div className="lg:w-[45%] md:w-full mb-20 transition-all duration-300 h-fit lg:h-[32rem] rounded-md bg-black/80 backdrop-blur-sm pb-1 mx-auto px-2 relative pt-1">
//         <h2 className="mb-2 ml-2 select-none w-fit left-1 bebas text-lg font-bold text-purple-300">{projectUrl ? name + " " : name}{projectUrl ? <a className="text-blue-500 hover:text-blue-400 text-base duration-300 transition-all font-semibold" target="_blank" href={projectUrl}>Link</a> : <span className="font-semibold text-base text-purple-400"> - Group Project</span>}</h2>
//         <Image alt="project" loading="lazy" className="rounded-sm w-[95%] mx-auto object-cover aspect-video" width={800} height={450} src={image} />
//         <p className="select-none bebas w-[95%] mx-auto text-sm pl-1 pt-1 text-purple-300 font-semibold">{description}</p>
//         <p className="pl-1 bebas pr-2 select-none w-[95%] mx-auto text-sm pt-1 pb-[0.15rem] text-purple-400 mb-12">{languages}</p>
//         <div className="flex flex-row justify-center w-full absolute bottom-3">
//             <a href={repository} className={`text-neutral-900 bebas bg-purple-600 ml-auto mr-2 px-2 py-1 rounded-md hover:bg-purple-500 hover:text-neutral-800 transition-all duration-300 flex flex-row`}>
//                 <p>CODE</p>
//                 <img alt={util} className="h-6 ml-2 aspect-square" src="/code.png" />
//             </a>
//             <button onClick={() => alert('demos coming soon')} className={`text-neutral-900 bebas bg-purple-600 mr-auto ml-2 px-2 py-1 rounded-md hover:bg-purple-500 hover:text-neutral-800 transition-all duration-300 flex flex-row`}>
//                 <p>DEMO</p>
//                 <img alt={util} className="h-6 ml-2 aspect-square" src="/tv.png" />
//             </button>
//         </div>
//     </div>
// )