import "./Heros.css"
import { Link } from 'react-router-dom';
import BoltIcon from '@mui/icons-material/Bolt';
import bgHeros from "../../assets/images/Heros/hero.png"
import OverlayImage from "../../assets/images/Heros/overlay.svg"
// import science from "../../assets/images/Features/191405.svg"


export default function Heros(){


    return (
      <>
        <section>
            <div className="hero-section">
                <img src={OverlayImage} alt="hero-overlay" className="overlay-heros"/>
                <img alt="hero" src={bgHeros} className="bgHero-image" />

                <div className="hero-text-main">
                    <div className="d-flex hero-content mt-4">
                        {/* <div>
                            <h1>Skills for <br/>
                            your present<br/>
                            started with <span style={{"color": "#00AB55"}}> Udacity</span></h1>
                        </div>
                        <div className="mt-5">
                            <h6>Our online courses are designed to fit in your industry supporting all-round with latest technologies.</h6>
                        </div>
                        <div className="mt-5 hero-btn">
                            <Link to="/login" ><BoltIcon /> Discover more</Link>
                        </div> */}

                         {/* <div className="mt-5">
                            <h1>Create Your<br/>
                                future with <span style={{"color": "#00AB55"}}> us</span>
                            </h1>
                        </div>
                        <div className="mt-4 description">
                            <span>Our online courses are designed to fit in your industry supporting all-round with latest technologies.</span>
                        </div>
                        <div className="mt-5 hero-btn">
                            <Link to="/courses" ><BoltIcon />Explore Courses</Link>
                            <Link to="/login" className="ms-4" >Try Free</Link>
                        </div> */}
                    </div>
                    {/* <div className="card-area ms-4 mt-5">
                        <div className="hero-div-display">
                            <div class="card card-1">
                                <img src="https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/null/external-technology-digital-globalization-parzival-1997-flat-parzival-1997.png" alt=""/>
                                <h6 class="card__title">Technology</h6>
                            </div>
                            <div class="card card-2 mt-5">
                            <img src="https://img.icons8.com/external-flat-wichaiwi/64/null/external-health-ageing-society-flat-wichaiwi.png" alt=""/>
                                <h6 class="card__title">Health</h6>
                            </div>
                        </div>
                        <div className="hero-print">
                            <span className="me-5">print("Hello")</span>
                            <br/>
                            <span className="">print("World")</span>
                        </div>


                        <div className="hero-div-display mt-2">
                            <div class="card card-3">
                                <img src="https://img.icons8.com/parakeet/64/null/test-tube.png" alt=""/>                                <h6 class="card__title">Science</h6>
                            </div>
                            <div class="card card-4 mt-5">
                                <img src="https://img.icons8.com/dusk/64/null/estimate.png" alt=""/>
                                <h6 class="card__title">Business</h6>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="banner-hero-height">
            </div>
        </section>
      </>
    )

}