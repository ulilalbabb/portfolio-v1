const Card = (props) => {
    const { title, image, description, link } = props
        return (
        <>
            <div className="lg:flex lg:items-center gap-30 mb-5">
                <a href={link}>
                <img src={image} className="mt-15 lg:mt-19 rounded-xl cursor-pointer hover:scale-105 duration-200 transition-transform w-[330px] lg:w-[700px]" alt="ToDo-List" />
                </a>
                <div>
                    <p className="font-bold text-xl py-1 lg:text-3xl">{title}</p>
                    <p className="text-sm lg:text-xl">{description}</p>
                </div>
            </div>
        </>
        )
}

export default Card