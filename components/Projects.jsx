import { projects } from '../app/projects.js';
import PreviewCardLeft from './PreviewCardLeft.jsx'
import PreviewCardRight from './PreviewCardRight.jsx'

export default function Projects(){
    return(
        <div id="four" className="from-violet-900/[0.01] via-purple-700/80 to-violet-900/[0.01] bg-gradient-to-b">
            <p id="h2-font-fix" className="select-none text-5xl mb-10 text-purple-200 font-outfit font-black tracking-wide w-3/5 pl-4 mx-auto mt-24">Projects</p>
            <div className="flex flex-col my-4 w-4/5 mx-auto">
                <PreviewCardLeft project={projects[0]} />
                <PreviewCardRight project={projects[1]} />
                <PreviewCardLeft project={projects[2]} />
                <PreviewCardRight project={projects[3]} />
            </div>
        </div>
    )
}