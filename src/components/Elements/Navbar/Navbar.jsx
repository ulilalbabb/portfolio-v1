const Navbar = () => {
    return (
        <div className="flex justify-between py-5 px-7 lg:px-10 fixed top-0 w-full">
            <div>
                <a href="#" className="font-secondary font-medium italic text-3xl">Ulil</a>
            </div>
            <div className="hidden lg:flex gap-10">
                <a href="#" className="font-primary hover:underline text-lg">Design</a>
                <a href="#" className="font-primary hover:underline text-lg">About</a>
                <a href="#" className="font-primary hover:underline text-lg">LinkedIn</a>
                <a href="#" className="font-primary hover:underline text-lg">Resume</a>
            </div>
        </div>
    )
}

export default Navbar