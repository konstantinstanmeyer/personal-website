import PreviewCard from "../components/PreviewCard"
import Link from "next/link";

import { projects } from '../data/projects';

export default function HomePage(){
  return(
    <div className="mx-auto flex flex-col justify-center mt-28 relative">
      <div className="w-3/5 mx-auto flex flex-col select-none px-5 mb-5 relative">
        <Link className="-top-3 right-6 absolute rounded-lg my-4 flex flex-row items-center hover:bg-gray-600 transition-all duration-300 bg-gray-700 h-20 [&>*]:mx-2 w-48 mx-auto justify-center" href="/resume">
          <img src="https://cdn-icons-png.flaticon.com/512/2986/2986528.png" className="h-12"/>
          <p className="text-gray-300 font-bold">Resume PDF</p>
        </Link>
        <h1 className="text-4xl font-bold text-gray-400">Konstantin Stanmeyer</h1>
        <h4 className="text-2xl text-gray-400 font-bold">Software Engineer</h4>
        <div className="flex flex-row items-center font-bold text-gray-400 [&>*]:mr-3">
          <a className="hover:underline" href="https://github.com/konstantinstanmeyer">Github</a>
          <a className="hover:underline" href="https://www.linkedin.com/in/konstantin-stanmeyer/">LinkedIn</a>
          <a className="hover:underline" href="https://dev.to/konstantinstanmeyer">Blog</a>
        </div>
      </div>
      <h1 className="text-center text-gray-400 font-bold mt-12 mb-5 text-3xl select-none">About Me</h1>
      <p className="text-gray-400 text-2xl font-bold text-center my-4 w-4/5 mx-auto select-none">
        I am a full stack software engineer enjoying all things challenging. I spend most of my time working on logical problems, learning skills that will streamline and enhance development.
      </p>
      <h2 className="select-none text-3xl mt-16 text-gray-400 font-bold text-center">Skills</h2>
      <div className="w-3/5 mx-auto flex flex-col select-none px-5 mb-5 relative">  
        <h6 className="text-xl text-gray-400 mt-8"><span className="text-2xl font-bold">Front End:</span> JavaScript | TypeScript | NEXT.js | CSS | Tailwind</h6>
        <h6 className="text-xl text-gray-400"><span className="text-2xl font-bold">Back End:</span> Ruby | Rails | NodeJS | Express | SQL(PostgreSQL, MySQL, SQLite) | MongoDB | GraphQL | Redis | Deno</h6>
        <h6 className="text-xl text-gray-400"><span className="text-2xl font-bold">Tools:</span> Google Cloud | AWS(S3, EC2, Amplify) | Heroku | Docker | NGINX | Vercel | Postman</h6>
      </div>
      <h2 className="select-none text-4xl mt-16 text-gray-400 font-bold text-center">Projects</h2>
      <div className="flex flex-wrap my-4 w-3/5 mx-auto">
        <PreviewCard project={projects[0]} />
        <PreviewCard project={projects[0]} />
        <PreviewCard project={projects[0]} />
      </div>
    </div>
  )
}