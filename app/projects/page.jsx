import { projects } from '../projects';
import PreviewCard from './PreviewCard.jsx'
import Links from './Links.jsx'

export default function Projects(){
    return(
        <div className="mb-32">
            <h2 className="select-none text-5xl mt-10 font-bold mb-10 text-purple-700 bebas text-center w-44 py-2 mx-auto">Projects</h2>
            <div className="flex flex-wrap my-4 w-3/5 mx-auto">
                <PreviewCard project={projects[0]} />
                <PreviewCard project={projects[1]} />
                <PreviewCard project={projects[2]} />
            </div>
            <Links />
        </div>
    )
}