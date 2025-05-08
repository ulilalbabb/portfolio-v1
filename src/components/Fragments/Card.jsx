import {Link} from "react-router-dom"
import Button from "../Elements/Button/Button"

const Card = (props) => {
    const { title, image, description, link } = props
        return (
        <>
            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-10 md:flex-row md:items-center md:px-10 md:mt-5 mb-5">
                <a href={link} className="overflow-hidden inline-block rounded-xl">
                <img src={image} className="mt-10 lg:mt-19 md:mt-5 md:mb-5 rounded-xl cursor-pointer hover:scale-105 duration-500 transition-transform w-[350px] lg:w-[700px] md:w-[650px]" alt="ToDo-List" />
                </a>
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-xl py-1 px-6 lg:text-3xl md:text-2xl">{title}</p>
                    <p className="text-md lg:text-xl md:text-2xl px-6">{description}</p>
                </div>
            </div>
        </>
        )
}

export default Card