import {CourseCard} from "../../components"
import "./PopularCourse.css"
const PopularCourses = () =>{

    return (
        <>
            <section id="popular-courses" className="pb-md-4">
                <div className="container text-center">
                    <div className="row">
                        <div className="feature-head">
                            <div>
                                <span>COURSES...!</span>
                            </div>
                            <div className="my-3">
                                <h2>Our Popular Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row p-md-4 mt-4">
                        <div className="col-lg-4 col-6 px-md-3">
                            <CourseCard/>
                        </div>

                        <div className="col-lg-4 col-6 px-md-3">
                            <CourseCard/>
                        </div>

                        <div className="col-lg-4 col-6 px-3">
                            <CourseCard/>
                        </div>

                        <div className="col-lg-4 col-6 px-3">
                            <CourseCard/>
                        </div>

                        <div className="col-lg-4 col-6 px-3">
                            <CourseCard/>
                        </div>

                        <div className="col-lg-4 col-6 px-3">
                            <CourseCard/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCourses;