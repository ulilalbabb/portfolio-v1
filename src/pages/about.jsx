import Navbar from "../components/Elements/Navbar/Navbar"
import Footer from "../components/Elements/Footer/Footer"

const About = () => {
    return (
        <>
           <Navbar/>
            <div className="h-screen bg-slate-50 flex flex-col justify-center items-center mt-30 gap-10 lg:flex-row lg:px-60 md:flex-row md:px-10">
                <img src="../assets/myphoto.jpg" className="w-[200px] h-[200px] rounded-full lg:w-[400px] lg:h-[400px] lg:rounded-2xl md:w-[350px] md:h-[350px] md:rounded-2xl" alt="profile" />
                <div className="px-5">
                    <h1 className="font-secondary font-bold text-4xl">Hi, I'm Ulil 👋</h1>
                    <p className=" text-xl pt-5">
                    I'm an English literature student who is very curious about web development. I'm the type of person who likes to explore and try new things if it's interesting to me. Over the past year I've been sharpening my knowledge and skills in Javascript and React.js.
                    </p>
                    <p className="text-xl pt-5 pb-5">
                    I enjoy solving problems and learning about new technologies, as well as providing creative ideas through design and code.
                    </p>
                    <p className="text-xl pt-1">
                    I'm looking to join a team committed to making a lasting, positive impact on people's lives and our communities.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About