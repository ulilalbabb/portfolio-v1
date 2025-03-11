import AnimatePage from "../../Layouts/AnimatePage"

const Hero = () => {
    return (
    <AnimatePage>
    <div className="h-screen bg-slate-50 flex flex-col justify-center items-center">
        <div>
            <p className="text-xl text-center lg:text-5xl md:text-4xl">
            I’m a web developer who loves cats 😼
            </p>
            <p className="text-lg text-center lg:text-3xl md:text-2xl">
            I ensure <span className="font-bold">smooth performance</span> and <span className="font-bold">modern design</span> while solving problems through coding.
            </p>
        </div>
        <p className="absolute bottom-5">view my <span className="font-bold">projects</span>  ↓</p>
    </div>
    </AnimatePage>
    )
}

export default Hero