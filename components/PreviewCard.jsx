"use client"

export default function ProjectCard({ project }){
    const { name, description, projectUrl, util, frontEnd, backEnd, languages } = project;

    return (
        <div className="w-[21rem] mb-10 transition-all duration-300 h-fit rounded-lg bg-gray-700 hover:bg-gray-600 pb-1 mx-auto px-2 relative pt-1 my-6">
            <div className={`mt-7 bg-${util} w-[20rem] h-[10rem] bg-center bg-cover relative rounded-lg`}>
                <h2 className="select-none inline-block w-fit absolute -top-7 left-1 text-lg font-bold text-gray-300">{name} - <a className="text-sm hover:text-blue-500 transition-all" target="_blank" href={projectUrl}>Link</a></h2>
            </div>
            <a className="absolute -bottom-[1.3rem] left-1 text-sm font-bold text-gray-400 transition-all duration-200 hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={frontEnd}>Front End Github</a>
            <a className="absolute -bottom-[1.3rem] right-1 text-sm font-bold text-gray-400 transition-all duration-200 hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={backEnd}>Back End Github</a>
            <p className="select-none text-sm pl-1 pt-1 text-gray-400">{description}</p>
            <p className="select-none text-sm pl-1 pt-1 pb-[0.15rem] text-gray-400">{languages}</p>
        </div>
    )
}