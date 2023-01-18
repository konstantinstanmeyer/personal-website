import Link from "next/link";

export default function PreviewCard({ project }){
    const { name, description, imageUrl } = project;

    return (
        <Link className="w-fit transition-all h-fit rounded-lg hover:bg-gray-700 pb-2 px-2" href="#">
            <div className="mt-6 bg-keyboard-app w-[20rem] h-[10rem] bg-center bg-cover relative rounded-lg">
                <h3 className="absolute -top-6 text-gray-400 font-bold text-center">{name} - <a className="text-sm hover:text-gray-100 hover:underline" href="https://starlit-brigadeiros-2cb599.netlify.app/" target="_blank">Link</a></h3>
                {/* <a className="absolute -bottom-6 left-1 text-sm text-gray-400" rel="noopener noreferrer" href="https://starlit-brigadeiros-2cb599.netlify.app/">github</a> */}
            </div>
        </Link>
    )
}