import './Home.css'
import { Slider,Features } from "../../components"
import {PopularCourses, OurTeachers, Heros, 
    WebsiteStats,HomeDemoVideoSection} from "../../contents"
// import 


const Home = () => {

    return (
        <>
        <Heros />
        <Features/>
        <PopularCourses/>
        <HomeDemoVideoSection/>
        <WebsiteStats />
        <OurTeachers/>
            
        </>
    )
}

export default Home