import { projects } from '../app/projects.js';
import PreviewCard from './PreviewCard.jsx'

export default function Projects(){
    return(
        <div id="four" className="from-violet-900/[0.01] via-purple-700/80 to-violet-900/[0.01] bg-gradient-to-b">
            <h2 className="select-none text-5xl font-bold mb-10 text-purple-400 bebas w-4/5 pl-4 mx-auto mt-24">Projects</h2>
            <div className="flex flex-wrap my-4 w-4/5 mx-auto">
                <PreviewCard project={projects[0]} />
                <PreviewCard project={projects[1]} />
                <PreviewCard project={projects[2]} />
                <PreviewCard project={projects[3]} />
            </div>
        </div>
    )
}