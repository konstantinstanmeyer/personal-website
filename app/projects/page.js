import { projects } from '.../data/projects';

export default function Projects(){
    return(
        <div>
            <h2 className="select-none text-4xl mt-16 text-gray-400 font-bold text-center bg-black/30 w-44 py-2 mx-auto backdrop-blur">Projects</h2>
            <div className="flex flex-wrap my-4 w-3/5 mx-auto">
                <PreviewCard project={projects[0]} />
                <PreviewCard project={projects[1]} />
                <PreviewCard project={projects[2]} />
            </div>
        </div>
    )
}