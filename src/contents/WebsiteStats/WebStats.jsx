import "./WebStats.css"
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import demoBgImage from "../../assets/images/Features/img-bg-screen.23e4b141.svg"
import { fontSize } from "@mui/system";



export default function WebsiteStats() {

    return (
        <>
        <section id="website-stats">
            <div className="container-fluid">
                <div className="row px-md-5">
                    <div className="col-lg-4">
                        <div className="web-stats-inner">
                            <div className="number">
                                <h2>128+</h2>
                            </div>
                            <div className="ps-1">
                                <h4>Online Courses</h4>
                                <p>Hand Crafted useful pages with best user experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="web-stats-inner">
                            <div className="number">
                                <h2>2000+</h2>
                            </div>
                            <div className="ps-1">
                                <h4>Virtual Students</h4>
                                <p>Hand Crafted useful pages with best user experience.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="web-stats-inner">
                        <div className="number">
                                <h2>100+</h2>
                            </div>
                            <div className="ps-1">
                                <h4>Instructors</h4>
                                <p>Hand Crafted useful pages with best user experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}


export const HomeDemoVideoSection = () => {
    return (
        <>
        <section id="home-demo-bg">
            <div className="container-fluid">
                <img src={demoBgImage} alt="demo_bg_image" />
                <div>
                    <div className="demo-feautes-content">
                        <div>
                            <h2>Watch Our <span>Demo</span> Videos Before Purchase</h2>
                        </div>
                        <div className="mt-5">
                            <Link to="/login" ><VisibilityIcon sx={{fontSize: "17px", mr:1}}/> Watch Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}