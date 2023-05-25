import "./CourseCard.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { Link } from "react-router-dom";

import course1 from "../../assets/images/Courses/course-1.jpg"


const CourseCard = () =>{

    return (
        <>
            <div className="course-card">
                <img src={course1} alt="course" />
                <div className="p-1 p-md-4">
                    <div className="d-flex justify-content-between">
                        <small><i className="fa fa-users "></i> 25 Students</small>
                        <small><i className="far fa-clock"></i> 01h 30min</small>
                    </div>
                    <div className="mt-2 mt-md-3 text-start">
                        <Link to="/" >Web design courses for beginner</Link>
                    </div>
                    <div className="d-flex justify-content-between my-3 my-md-4">
                        <small className="fw-bolder "><i className="fa fa-star text-primary me-2"></i>4.5 <span className="fw-normal ms-2">(255)</span></small>
                        <small className="fw-bolder ">$ 99</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseCard


export const TrendingCourseCard = ({image,title,description,price,rating}) =>{
    return (
        <>
            <Card sx={{ width: 240, cursor: "pointer",border: "none",boxShadow: "none" }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent sx={{padding:"5px 0px","&:last-child": {pb:0}}} className="course-card-content">
                    <h5 className="m-0">{title}</h5>
                    <small >
                        Learning group
                    </small>
                    <div className="mb-2" style={{"height":"20px"}}>
                        <small className="me-2">
                          {rating}
                        </small>
                        <Stack spacing={1} className='d-inline-block pt-1'>
                          <Rating
                            className='filter-rating-star' name='half-rating-read'
                            defaultValue={4.5} precision={0.5}  readOnly
                          />
                        </Stack>
                        <small className='ms-2 text-secondary'>
                            (10,200)
                        </small>
                      </div>
                      <span className="card-price">₹{price} <strike className="ms-2 text-secondary">₹999</strike></span>
                </CardContent>
            </Card>

        </>
    )
}