import Navbar from "../components/Elements/Navbar/Navbar"
import Hero from "../components/Elements/Hero/Hero"
import CardProjects from "../components/Layouts/CardProjects"
import Footer from "../components/Elements/Footer/Footer"

const Homepage = () =>{
    return (
        <>
            <Navbar/>
            <Hero/>
            <CardProjects/>
            <Footer/>
        </>
    )
}

export default Homepage