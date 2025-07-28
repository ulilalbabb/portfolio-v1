const Card = (props) => {
    const { title, image, description, link } = props
        return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 mx-3 lg:mx-12 md:mx-5">
                <a href={link} className="overflow-hidden rounded-xl">
                <img src={image} className="mt-10 lg:mt-19 md:mt-5 md:mb-5 cursor-pointer hover:scale-105 duration-500 transition-transform w-full lg:w-[700px] md:w-[650px]" alt="picture" />
                </a>
                <div className="flex flex-col justify-center lg:ml-8">
                    <p className="font-bold text-xl py-1 px-1 lg:text-3xl md:text-2xl">{title}</p>
                    <p className="text-md lg:text-xl md:text-2xl px-1">{description}</p>
                </div>
            </div>
        </>
        )
}

export default Card