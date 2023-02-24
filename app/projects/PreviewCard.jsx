import Image from "next/image";

export default function ProjectCard({ project }){
    const { name, description, projectUrl, frontEnd, backEnd, languages, image, util } = project;

    return (
        <div className="w-[21rem] mb-28 transition-all duration-300 h-fit sm:h-[23rem] rounded-lg bg-black/80 backdrop-blur-sm pb-1 mx-auto px-2 relative pt-1">
            <h2 className="mb-2 ml-2 select-none w-fit left-1 bebas text-lg font-bold text-purple-300">{projectUrl ? name + " " : name}{projectUrl ? <a className="text-blue-500 hover:text-blue-400 text-base duration-300 transition-all font-semibold" target="_blank" href={projectUrl}>Link</a> : <span className="font-semibold text-base text-purple-400"> - Group Project</span>}</h2>
            <Image loading="lazy" className="rounded-lg h-48 w-[95%] mx-auto object-cover" width={800} height={450} src={image} />
            <a className="bebas absolute block sm:hidden sm:mt-36 -bottom-10 w-full text-center sm:w-fit -left-[0.02rem] sm:right-0 sm:left-1 bg-black/80 backdrop-blur-sm py-1 sm:px-2 rounded-lg font-bold text-purple-500 transition-all duration-200 hover:text-purple-600" target="_blank" rel="noopener noreferrer" href={frontEnd}>Front End Github</a>
            <a className="bebas absolute block sm:hidden sm:mt-36 -bottom-20 w-full text-center sm:w-fit -left-[0.02rem] !sm:right-1 font-bold bg-black/80 backdrop-blur-sm py-1 sm:px-2 rounded-lg text-purple-500 transition-all duration-200 hover:text-purple-600" target="_blank" rel="noopener noreferrer" href={backEnd}>Back End Github</a>
                <a className="bebas absolute sm:block hidden mt-36 w-full text-center sm:w-fit left-1 bg-black/80 backdrop-blur-sm py-1 sm:px-2 rounded-lg font-bold text-purple-500 transition-all duration-200 hover:text-purple-600" target="_blank" rel="noopener noreferrer" href={frontEnd}>Front End Github</a>
                <a className="bebas absolute sm:block hidden mt-36 w-full text-center sm:w-fit right-1 font-bold bg-black/80 backdrop-blur-sm py-1 sm:px-2 rounded-lg text-purple-500 transition-all duration-200 hover:text-purple-600" target="_blank" rel="noopener noreferrer" href={backEnd}>Back End Github</a>
            <p className="select-none w-[95%] mx-auto text-sm pl-1 pt-1 text-purple-300 font-semibold">{description}</p>
            <p className="pl-2 pr-2 select-none text-sm pt-1 pb-[0.15rem] text-purple-400">{languages}</p>
        </div>
    )
}