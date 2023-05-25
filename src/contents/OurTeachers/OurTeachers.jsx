import "./OurTeachers.css"
import {Link} from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import {dummy_instructor} from "../../Variable/Variable"


export default function OurTeachers(){

    return (
        <>
            <section id="our-teachers">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="feature-head">
                            <div>
                                <span>Instructors...!</span>
                            </div>
                            <div className="my-3">
                                <h2>Meet Our Instructors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row p-md-4 mt-4">
                        {dummy_instructor.map((instructor) =>(
                            <div className="col-md-4 col-4 col-lg-25 px-md-3 py-2" key={instructor.name}>
                                <div className="instructor-card">
                                    <img src={instructor.image} alt="teacher1" />
                                    <div className="team-social">
                                        <Link className="btn btn-outline-light btn-square mx-1" to="/"><i className="fab fa-twitter"></i></Link>
                                        <Link className="btn btn-outline-light btn-square mx-1" to="/"><i className="fab fa-facebook-f"></i></Link>
                                        <Link className="btn btn-outline-light btn-square mx-1" to="/"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                                <div className="card-text p-2 p-md-4">
                                    <h4>{instructor.name}</h4>
                                    <p className="m-0">{instructor.profficience}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export const PopularInstructors = () =>{
    return (
        <>
            <section id="popular-instructor">
                <div className="container-fluid" style={{"padding": "10px 30px"}}>
                    <div className="my-4 popular_course">
                        <h3 >Popular Instructor</h3>
                    </div>
                    <div className="row">
                      {dummy_instructor.map((instructor) =>(
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="border p-3" style={{"cursor":"pointer"}}>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Avatar alt="Remy Sharp" 
                                            sx={{ width: 60, height: 60 }} 
                                            src={instructor.image} 
                                        />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="popular_teacher_name">
                                            <span>{instructor.name}</span>
                                        </div>
                                        <div>
                                            <small style={{"fontSize": "13px"}}>{instructor.profficience}</small>
                                        </div>
                                        <div>
                                            <small className="">
                                                4.5<i className="fa fa-star text-warning ms-2"></i>
                                                <span className="fw-normal ms-2" 
                                                    style={{"fontSize": "12px","color":"#b4690e"}}>Instructor Rating</span>
                                            </small>
                                        </div>
                                        <div className="student-course">
                                            {instructor.no_students}
                                            <small className="ms-1"> Students</small>
                                        </div>
                                        <div className="student-course">
                                            {instructor.cources}
                                            <small className="ms-1"> Courses</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                </div>
            </section>
        </>
    )
}