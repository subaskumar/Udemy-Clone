import "./Features.css"
import feature1 from "../../assets/images/Features/img-feature1.d830db54.svg"
import feature2 from "../../assets/images/Features/img-feature2.d56e9354.svg"
import feature3 from "../../assets/images/Features/img-feature3.d97a5c3e.svg"


const Features = () =>{

    return (
        <>
        <section id="features">
            <div className="container-fluid px-md-5">
                <div className="row text-center my-4">
                    <div className="feature-head">
                        <div className="my-2">
                            <span>Udacity nailed it!</span>
                        </div>
                        <div>
                            <h2>Why Udacity?</h2>
                        </div>
                        <div className="my-3 my-md-4">
                            <p>Customize everything with the Mantis React Material-UI Dashboard Template 
                                built with latest <br/>MUI v5 component library
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row mx-md-2">
                    <div className="col-md-4 mt-1">
                        <div className="feature-thumb py-2 py-md-4 px-4 border text-left">
                            <div>
                                <img src={feature1} alt="feature1"/>
                            </div>
                            {/* <span>01</span> */}
                            <h5>Trending Courses</h5>
                            <p>Known is free education HTML Bootstrap Template. You can download and use this for your website.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-1">
                        <div className="feature-thumb py-2 py-md-4 px-4 border text-left">
                            <div>
                                <img src={feature2} alt="feature1"/>
                            </div>
                            {/* <span>02</span> */}
                            <h5>Books & Library</h5>
                            <p>Highly flexible to work around using Mantis React Template.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-1">
                        <div className="feature-thumb py-2 py-md-4 px-4 border text-left">
                            <div>
                                <img src={feature3} alt="feature1"/>
                            </div>
                            {/* <span>03</span> */}
                            <h5>Certified Teachers</h5>
                            <p>Need help? Check out the detailed Documentation guide. Mantis for All</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Features