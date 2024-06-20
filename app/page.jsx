import Projects from "@/components/Projects";
import Link from "next/link";
import Links from "../components/Links";

export default function HomePage(){
  return(
    <>
    <Links />
    <div className="mx-auto flex flex-col justify-center relative z-30">
      <div id="one" className="absolute top-0 invisible h-1">
        util
      </div>
      <div className="w-4/5 sm:w-3/5 mx-auto flex flex-row select-none relative duration-500 transform transition-all translate-y-12 ease-out">
        <div className="transition-opacity ease-in duration-700 h-screen flex flex-col justify-center">
          <h1 className="text-5xl sm:text-8xl font-bold text-purple-700 bebas break-word -mt-16 sm:-mt-12">Konstantin Stanmeyer</h1>
          <h4 className="text-3xl sm:text-6xl text-purple-500 break-word font-bold">Full-Stack Software Engineer</h4>
          <div className="flex flex-row items-center font-bold text-gray-400 mt-2">
            <a className="text-purple-400 hover:underline bebas sm:text-3xl text-xl rounded-md mr-5" href="#two">ABOUT ME</a>
            <a target="_blank" className="text-purple-400 hover:underline bebas sm:text-3xl text-xl rounded-md mr-4" href="https://dev.to/konstantinstanmeyer">BLOG</a>
            <Link href="resume">
              <img className="resume w-8" src="/resume.png" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-fit flex items-center bg-purple-800/10 relative">
        <p className="text-purple-300 text-2xl my-12 font-bold w-4/5 sm:w-4/5 mx-auto select-none backdrop-blur-sm rounded-lg">
          <span className="bebas text-2xl sm:text-3xl text-purple-400 ">ABOUT ME: </span>I'm a full-stack software engineer with a passion for learning in all forms. I love to challenge myself, always striving to improve my process and approach. Experienced with multiple languages and frameworks including NEXT.js and Ruby on Rails. Avid runner and photographer.
        </p>
        <p id="two" className="absolute top-[-6rem] sm:top-[-14rem] invisible">anchor</p>
      </div>
      <div className="flex flex-col lg:w-1/2 w-5/6 md:w-3/5 mx-auto h-[75vh] -mt-2 justify-center relative">
        <p id="three" className="absolute invisible -top-20">anchor</p>
        <p className="text-purple-500 bebas text-4xl mb-3">technical skills</p>
        <div className="flex flex-wrap items-center justify-center w-full mx-auto">
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="javascript" src="/javascript.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="react" src="/react.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="redux" src="/redux.png" className="w-[75%] h-[75%] invert object-cover" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="nextjs" src="/nextjs.svg" className="w-[80%] h-[80%] rounded-full invert" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="mongodb" src="/mongodb.webp" className="w-[70%] h-[70%]" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="ruby" src="/ruby.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
            <img alt="ruby-on-rails" src="/rails.png" className="w-[80%] h-[80%] rounded-full" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-125">
            <img alt="postgres" src="/postgres.png" className="w-[80%] h-[80%] object-cover rounded-full" />
          </div>
          <div className="rounded-full bg-neutral-500/20 backdrop-blur-sm w-20 md:w-28 aspect-square md:mx-2 lg:mx-4 flex justify-center items-center my-2 mx-1 hover:scale-105 transition-translate duration-300 hover:brightness-110">
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
      <Projects />
      <div id="five" className="h-[20vh] flex flex-col items-center justify-center mb-10">
        <p className="text-purple-300 bebas text-2xl">Contact:</p>
        <p className="text-purple-300 bebas text-2xl">konstantin@stanmeyer.com</p>
      </div>
    </div>
    </>
  )
}