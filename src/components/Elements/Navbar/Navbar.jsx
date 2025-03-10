import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5 px-7 lg:px-10 fixed top-0 w-full">
            <div>
                <a href="#" className="font-secondary font-medium italic text-3xl"><Link to="/">Ulil</Link></a>
            </div>
            <div className="hidden lg:flex md:flex gap-10">
                <a href="#" className="font-primary hover:underline text-lg"><Link to="/">Design</Link></a>
                <a href="#" className="font-primary hover:underline text-lg"><Link to="/about">About</Link></a>
                <a href="https://www.linkedin.com/in/muhammad-ulil-albab-68786528a/" className="font-primary hover:underline text-lg">LinkedIn</a>
                <a href="#" className="font-primary hover:underline text-lg">Resume</a>
            </div>
        </div>
    )
}

export default Navbar