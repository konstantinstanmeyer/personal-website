import Image from "next/image";

export default function ProjectCard({ project }){
    const { name, description, projectUrl, frontEnd, backEnd, languages, image, util } = project;

    return (
        <div className="w-[21rem] mb-10 transition-all duration-300 h-[23rem] rounded-lg bg-black/80 hover:bg-gray-600 pb-1 mx-auto px-2 relative pt-1 my-6">
            <h2 className="mb-2 select-none w-fit left-1 text-lg font-bold text-gray-200">{projectUrl ? name + " - " : name}{projectUrl ? <a className="hover:text-blue-500 text-base duration-300 transition-all font-semibold" target="_blank" href={projectUrl}>Link</a> : <span className="font-semibold text-base"> - Group Project</span>}</h2>
            <Image loading="lazy" className="rounded-lg h-48 w-full object-cover" width={300} height={200} src={image} />
            <a className="absolute -bottom-[1.3rem] left-1 text-sm font-bold text-gray-400 transition-all duration-200 hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={frontEnd}>Front End Github</a>
            <a className="absolute -bottom-[1.3rem] right-1 text-sm font-bold text-gray-400 transition-all duration-200 hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={backEnd}>Back End Github</a>
            <p className="select-none text-sm pl-1 pt-1 text-gray-300 font-semibold">{description}</p>
            <p className="absolute bottom-1 select-none text-sm pl-1 pt-1 pb-[0.15rem] text-gray-400">{languages}</p>
        </div>
    )
}