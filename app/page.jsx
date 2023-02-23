import PreviewCard from "./projects/PreviewCard"
import Link from "next/link";

import { projects } from './projects';

export default function HomePage(){
  return(
    <div className="mx-auto flex flex-col justify-center mt-2 relative z-40">
      <div className="w-3/5 sm:w-2/5 mx-auto flex flex-row select-none px-5 relative bg-black/30 backdrop-blur-sm rounded-lg py-3 duration-500 transform transition-all translate-y-12 ease-out">
        <div className="transition-opacity ease-in duration-700">
          <h1 className="text-xl sm:text-4xl font-bold text-purple-700 bebas">Konstantin Stanmeyer</h1>
          <h4 className="text-base sm:text-2xl text-purple-300 font-bold">Software Engineer</h4>
          <div className="flex flex-row items-center font-bold text-gray-400 [&>*]:mr-2 sm:[&>*]:mr-3">
            <a className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://github.com/konstantinstanmeyer">Github</a>
            <a className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://www.linkedin.com/in/konstantin-stanmeyer/">LinkedIn</a>
            <a className="text-purple-400 hover:underline bebas sm:text-base text-sm" href="https://dev.to/konstantinstanmeyer">Blog</a>
          </div>
        </div>
      </div>
      <p className="text-purple-300 text-lg sm:text-xl font-bold my-4 w-4/5 sm:w-2/5 mt-16 mx-auto select-none bg-black/30 backdrop-blur-sm py-2 rounded-lg px-4">
        <span className="bebas text-xl sm:text-2xl text-purple-400 ">ABOUT ME: </span>I'm a full-stack engineer experienced with multiple languages and frameworks including NEXT.js and Ruby on Rails. I love to learn and challenge myself, always striving to improve my logic and approach. Currently living in Colorado. Avid runner and skateboarder.
      </p>
      <div className="flex flex-col w-1/2 mx-auto my-2">
        <div className="flex flex-wrap items-center justify-center w-full mx-auto">
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/javascript.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/react.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/nextjs.svg" className="w-[80%] h-[80%] rounded-full invert" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/nodejs.webp" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/nodejs.webp" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/nodejs.webp" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-black/30 backdrop-blur-sm w-28 h-28 mx-6 flex justify-center items-center my-2">
            <img src="/nodejs.webp" className="w-[80%] h-[80%] rounded-full" />
          </div>
        </div>
      </div>
      <Link href="/projects" className="w-40 mx-auto h-16 mt-4 rounded-lg bg-purple-800/20 hover:bg-purple-800/40 transition-all duration-300 mb-32 items-center flex justify-center">
        <p className="text-purple-600 text-3xl bebas">Projects</p>
      </Link>
      {/* <h2 className="select-none text-4xl mt-16 text-purple-700 font-bold text-center bg-black/30 backdrop-blur-sm w-32 py-2 mx-auto rounded-lg bebas">SKILLS</h2>
      <div className="w-2/5 mx-auto flex flex-col select-none px-5 mb-5 relative bg-black/30 backdrop-blur-sm my-8 py-2 rounded-lg">  
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Front End:</span> JavaScript | TypeScript | NEXT.js | CSS | Tailwind</h6>
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Back End:</span> Ruby | Rails | NodeJS | Express | SQL(PostgreSQL, MySQL, SQLite) | MongoDB | GraphQL | Redis | Deno</h6>
        <h6 className="text-xl text-purple-400"><span className="text-2xl font-bold">Tools:</span> Google Cloud | AWS(S3, EC2, Amplify) | Heroku | Docker | NGINX | Vercel | Postman</h6>
      </div> */}
    </div>
  )
}