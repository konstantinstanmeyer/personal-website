import PreviewCard from "./projects/PreviewCard"
import Link from "next/link";
import Links from "../components/Links";

import { projects } from './projects';

export default function HomePage(){
  return(
    <>
    <div className="mx-auto flex flex-col -mt-4 justify-center relative z-40">
      <div className="w-3/5 sm:w-2/5 mx-auto flex flex-row select-none px-5 relative bg-black/30 backdrop-blur-sm rounded-lg py-3 duration-500 transform transition-all translate-y-12 ease-out">
        <div className="transition-opacity ease-in duration-700">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700 bebas -my-1">Konstantin Stanmeyer</h1>
          <h4 className="text-xl sm:text-3xl text-purple-500 font-bold -my-1">Software Engineer</h4>
          <Link href="projects" className="text-lg sm:text-2xl text-purple-300 font-bold mb-1 hover:underline">Projects</Link>
          <div className="flex flex-row items-center font-bold text-gray-400 [&>*]:mr-2 sm:[&>*]:mr-3">
            <a target="_blank" className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://github.com/konstantinstanmeyer">Github</a>
            <a target="_blank" className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://www.linkedin.com/in/konstantin-stanmeyer/">LinkedIn</a>
            <a target="_blank" className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://dev.to/konstantinstanmeyer">Blog</a>
          </div>
        </div>
      </div>
      <p className="text-purple-300 text-base sm:text-lg font-bold my-4 w-4/5 sm:w-2/5 mt-16 mx-auto select-none bg-black/30 backdrop-blur-sm py-2 rounded-lg px-4">
        <span className="bebas text-lg sm:text-xl text-purple-400 ">ABOUT ME: </span>I'm a full-stack software engineer with a passion for learning in all forms. I love to challenge myself, always striving to improve my process and approach. Experienced with multiple languages and frameworks including NEXT.js and Ruby on Rails. Avid runner and skateboarder.
      </p>
      <div className="flex flex-col lg:w-1/2 w-5/6 md:w-3/5 mx-auto mt-1 mb-36">
        <div className="flex flex-wrap items-center justify-center w-full mx-auto">
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="javascript" src="/javascript.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 md:aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="react" src="/react.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="redux" src="/redux.png" className="w-[75%] h-[75%] invert object-cover" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="nextjs" src="/nextjs.svg" className="w-[80%] h-[80%] rounded-full invert" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="mongodb" src="/mongodb.webp" className="w-[70%] h-[70%]" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="ruby" src="/ruby.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="ruby-on-rails" src="/rails.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="postgres" src="/postgres.png" className="w-[80%] h-[80%] object-cover rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="aws" src="/aws.png" className="w-[80%] h-[80%] object-cover rounded-full" />
          </div>
        </div>
      </div>
      {/* <h2 className="select-none text-4xl mt-16 text-purple-700 font-bold text-center bg-black/30 backdrop-blur-sm w-32 py-2 mx-auto rounded-lg bebas">SKILLS</h2>
      <div className="w-2/5 mx-auto flex flex-col select-none px-5 mb-5 relative bg-black/30 backdrop-blur-sm my-8 py-2 rounded-lg">  
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Front End:</span> JavaScript | TypeScript | NEXT.js | CSS | Tailwind</h6>
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Back End:</span> Ruby | Rails | NodeJS | Express | SQL(PostgreSQL, MySQL, SQLite) | MongoDB | GraphQL | Redis | Deno</h6>
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Tools:</span> Google Cloud | AWS(S3, EC2, Amplify) | Heroku | Docker | NGINX | Vercel | Postman</h6>
      </div> */}
    </div>
    <Links />
    </>
  )
}