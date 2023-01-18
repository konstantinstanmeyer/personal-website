import PreviewCard from "../components/PreviewCard"

import { projects } from '../data/projects';

export default function HomePage(){
  return(
    <div className="w-3/5 mx-auto flex flex-col justify-center mt-10">
      <div id="skills">
        <h1 className="text-4xl font-bold text-gray-400">Konstantin Stanmeyer</h1>
        <h4 className="text-xl text-gray-400">Software Engineer</h4>
        <p className="text-md text-gray-400">Front End: JavaScript | TypeScript | NEXT.js | CSS | Tailwind</p>
        <p className="text-md text-gray-400">Back End: Ruby | Rails | NodeJS | Express | SQL(PostgreSQL, MySQL, SQLite) | MongoDB | GraphQL | Redis | Deno</p>
        <p className="text-md text-gray-400">Tools: Google Cloud | AWS(S3, EC2, Amplify) | Heroku | Docker | NGINX | Vercel | Postman</p>
      </div>
      <PreviewCard project={projects[0]} />                                                                                      
    </div>
  )
}