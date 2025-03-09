const Footer = () => { 
    return (
        <div className="h-70 bg-gray-200 flex flex-col justify-end lg:flex-row lg:justify-between lg:items-end pl-4 pb-4">
            <h2 className="text-6xl lg:text-8xl font-secondary italic font-bold">Get in touch</h2>
            <div className="flex flex-col lg:flex-row lg:gap-10 lg:items-center  pr-5">
                <p className="pt-2 font-primary">ulilalbabcmpk@gmail.com</p>
                <p className="hidden lg:block">⁕</p>
                <a href="" className="pt-2 font-primary hover:underline">LinkedIn</a>
                <p className="hidden lg:block">⁕</p>
                <a href="" className="pt-2 font-primary hover:underline">GitHub</a>
            </div>
        </div>
    )
}

export default Footer