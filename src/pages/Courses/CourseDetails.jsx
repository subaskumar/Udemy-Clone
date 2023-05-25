import Rating from '@mui/material/Rating';
import "./CourseDetails.css"
import courseDetailsBg from "../../assets/images/Heros/bg-image-10.jpg"
import {CustomizedAccordions} from "../../components";
import { Link } from 'react-router-dom';
import {Button, Avatar, Fade, Backdrop, Box, Modal} from '@mui/material';
import { IoIosTimer } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { FiAward } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { FiCalendar, FiUsers, FiHeart, FiAward } from 'react-icons/fi';
import { MdOutlineRateReview, MdPlayCircleFilled } from 'react-icons/md';
import { BsBook } from 'react-icons/bs';
import { AiOutlineNodeCollapse } from 'react-icons/ai';
import { BiCheck } from 'react-icons/bi';
import {ImStarFull} from 'react-icons/im';
import LinearProgress from '@mui/joy/LinearProgress';
import Stack from '@mui/joy/Stack';
import ReactPlayer from 'react-player'
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 54,
  };

const CourseDetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function stringAvatar(name) {
        return {
          children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
      }


    return (
        <>
            <div className="container-fluid course-details-hero">
                <div className="hero-image">
                    <img src={courseDetailsBg} alt="banner"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 px-2">
                            <div className="course-details-content">
                                <h2>The Complete Histudy 2022: From Zero to Expert!</h2>
                                <p className="mb-4">Master Python by building 100 projects in 100 days. 
                                    Learn data science, automation, build websites, games and apps!
                                </p>
                                <div className="d-flex align-items-center mb-4">
                                    <div className="m-1">
                                        <span className="badge-bestseller">
                                            <img src="https://rainbowit.net/html/histudy/assets/images/icons/card-icon-1.png"
                                                alt=""
                                            />
                                            Bestseller
                                        </span>
                                    </div>
                                    <div className="m-1">
                                        <span className="rating d-flex">
                                            <small className='me-1'>4.5</small>
                                            <Rating name="read-only" value={4.5} readOnly />
                                        </span>
                                    </div>
                                    <div className="m-1 total-rating">
                                        <Link to="/">12,750 rating </Link>
                                    </div>
                                    <div className="m-1 total-student">
                                        <span>616,029 students</span>
                                    </div>
                                </div>
                                <div className='d-flex mb-4 instructor-avatar'>
                                    <Avatar alt="Trevor Henderson" src="https://rainbowit.net/html/histudy/assets/images/client/avatar-02.png" />
                                    <div className='p-1'>
                                        <span className='ms-2'>
                                            By
                                            <Link to="/"> Subas </Link>
                                            in
                                            <Link to="/"> Development</Link>
                                        </span>
                                    </div>
                                </div>
                                <ul className='d-flex'>
                                    <li><FiCalendar />  Last updated 01/2023</li>
                                    <li><GrLanguage />  English</li>
                                    <li><FiAward />  Certified Course</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 p-0'>
                            <div className='container-fluid py-5'>
                                <div className='d-flex course-tab'>
                                    <div>
                                        <a href='#overview' data-bs-toggle="smooth-scroll" data-bs-offset="0">Overview</a>
                                    </div>
                                    <div>
                                        <a href='#content' data-bs-toggle="smooth-scroll" data-bs-offset="0">Course Content</a>
                                    </div>
                                    <div>
                                        <a href='#details' data-bs-toggle="smooth-scroll" data-bs-offset="0">Details</a>
                                    </div>
                                    <div>
                                        <a href='#instructor' data-bs-toggle="smooth-scroll" data-bs-offset="0">Instructor</a>
                                    </div>
                                    <div>
                                        <a href='#review' data-bs-toggle="smooth-scroll" data-bs-offset="0">Review</a>
                                    </div>
                                </div>
                                <div id="overview">
                                    <div className='overview-content my-5'>
                                        <h5>What you'll learn</h5>
                                        <ul>
                                            <li>
                                                <div className='d-flex'>
                                                    <BiCheck />
                                                    <div>
                                                        Become an advanced, confident, and modern JavaScript developer from scratch
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex'>
                                                    <BiCheck />
                                                    <div>
                                                        Become an advanced, confident, and modern JavaScript developer from scratch
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex'>
                                                    <BiCheck />
                                                    <div>
                                                        Become an advanced, confident, and modern JavaScript developer from scratch
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex'>
                                                    <BiCheck />
                                                    <div>
                                                        Become an advanced, confident, and modern JavaScript developer from scratch
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className='d-flex'>
                                                    <BiCheck />
                                                    <div>
                                                        Become an advanced, confident, and modern JavaScript developer from scratch
                                                    </div>
                                                </div>
                                            </li>           
                                        </ul>
                                    </div>
                                </div>
                                <div id="content" className='mb-5'>
                                    <h5 className='mb-4'>Course content</h5>
                                    <small>23 sections • 155 lectures • 22h 13m total length</small>
                                    <CustomizedAccordions />
                                </div>
                                <div id="instructor">
                                    <h5 className='mb-4'>About the instructor</h5>
                                    <div className='d-flex py-2'>
                                        <div>
                                            <Avatar
                                                className='instructor-avatar'
                                                alt="Remy Sharp"
                                                src="https://rainbowit.net/html/histudy/assets/images/testimonial/testimonial-7.jpg"
                                                sx={{ 
                                                    width: 140, height: 140,
                                                 }}
                                            />
                                        </div>
                                        <div className='instructor-stats px-3 py-2'>
                                            <ul className=''>
                                                <li>
                                                    <div className='d-flex py-1'>
                                                        <ImStarFull /> <span>Instructor Rating</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex py-1'>
                                                        <MdOutlineRateReview /> <span>Reviews</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex py-1'>
                                                        <FiUsers /> <span>Students</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='d-flex py-1'>
                                                        <MdPlayCircleFilled /> <span>Courses</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='py-3 instructor-about'>
                                        <p>
                                        I am a UI/UX designer and an iOS developer with having almost six years of experience in 
                                        application development and also ten years of graphic design and User Interface design.
                                        </p>
                                    </div>
                                </div>
                                <div id="review">
                                    <div className='py-5 feedback-main'>
                                        <h5>Student feedback</h5>
                                        <div className='d-flex my-4'>
                                            <div className='feedback-star'>
                                                <div className=''>
                                                    <h1>4.5</h1>
                                                    <h6>Course rating</h6>
                                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="small" />
                                                </div>
                                            </div>
                                            <div className='px-3 w-100'>
                                                <div  className='d-flex py-1 align-items-center'>
                                                    <Rating name="size-large" defaultValue={5} readOnly/>
                                                    <div className='linear-progress'>
                                                        <LinearProgress determinate value={70} variant="outlined" 
                                                            size="lg" sx={{ ml: "15px", color: "#ff9100" }}
                                                        />
                                                    </div>
                                                    <span className='ms-2'>70%</span>
                                                </div>
                                                <div  className='d-flex py-1 align-items-center'>
                                                    <Rating name="size-large" defaultValue={4} readOnly/>
                                                    <div className='linear-progress'>
                                                        <LinearProgress determinate value={50} variant="outlined" 
                                                            size="lg" sx={{ ml: "15px", color: "#ff9100" }}
                                                        />
                                                    </div>
                                                    <span className='ms-2'>50%</span>
                                                </div>
                                                <div  className='d-flex py-1 align-items-center'>
                                                    <Rating name="size-large" defaultValue={3} readOnly/>
                                                    <div className='linear-progress'>
                                                        <LinearProgress determinate value={35} variant="outlined" 
                                                            size="lg" sx={{ ml: "15px", color: "#ff9100" }}
                                                        />
                                                    </div>
                                                    <span className='ms-2'>35%</span>
                                                </div>
                                                <div  className='d-flex py-1 align-items-center'>
                                                    <Rating name="size-large" defaultValue={2} readOnly/>
                                                    <div className='linear-progress'>
                                                        <LinearProgress determinate value={20} variant="outlined" 
                                                            size="lg" sx={{ ml: "15px", color: "#ff9100" }}
                                                        />
                                                    </div>
                                                    <span className='ms-2'>20%</span>
                                                </div>
                                                <div  className='d-flex py-1 align-items-center'>
                                                    <Rating name="size-large" defaultValue={1} readOnly />
                                                    <div className='linear-progress'>
                                                        <LinearProgress determinate value={10} variant="outlined" 
                                                            size="lg" sx={{ ml: "15px", color: "#ff9100" }}
                                                        />
                                                    </div>
                                                    <span className='ms-2'>10%</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div className='row py-4'>
                                        <div className='col-sm-12, col-md-6'>
                                                <div className='review-card p-2'>
                                                    <div className='review-head mb-4'>
                                                        <div className='d-flex'>
                                                            <Avatar sx={{ bgcolor: "#1c1d1f" }} {...stringAvatar('Kent Dodds')} />
                                                            <div className='ms-3'>
                                                                <span className='commenter-name'>Subas Kumar</span>
                                                                <div className='d-flex commenter-rating'>
                                                                    <Rating defaultValue={4.5} precision={0.5} readOnly sx={{fontSize: "14px"}}/>
                                                                    <small className='ms-2'>2 months ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <MoreVertIcon />
                                                        </div>
                                                    </div>
                                                    <div className='comment-txt'>
                                                        <p>
                                                            My name is Onu Princeley Toochukwu. I want to say a very big thank you to 
                                                            Udemy management and Dr Angela Yu. This course is one of the best decisions i have taken in my life. 
                                                            I must say that i have learnt so much, and
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12, col-md-6'>
                                                <div className='review-card p-2'>
                                                    <div className='review-head mb-4'>
                                                        <div className='d-flex'>
                                                            <Avatar sx={{ bgcolor: "#1c1d1f" }} {...stringAvatar('Kent Dodds')} />
                                                            <div className='ms-3'>
                                                                <span className='commenter-name'>Subas Kumar</span>
                                                                <div className='d-flex commenter-rating'>
                                                                    <Rating defaultValue={4.5} precision={0.5} readOnly sx={{fontSize: "14px"}}/>
                                                                    <small className='ms-2'>2 months ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <MoreVertIcon />
                                                        </div>
                                                    </div>
                                                    <div className='comment-txt'>
                                                        <p>
                                                            My name is Onu Princeley Toochukwu. I want to say a very big thank you to 
                                                            Udemy management and Dr Angela Yu. This course is one of the best decisions i have taken in my life. 
                                                            I must say that i have learnt so much, and
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12, col-md-6'>
                                                <div className='review-card p-2'>
                                                    <div className='review-head mb-4'>
                                                        <div className='d-flex'>
                                                            <Avatar sx={{ bgcolor: "#1c1d1f" }} {...stringAvatar('Kent Dodds')} />
                                                            <div className='ms-3'>
                                                                <span className='commenter-name'>Subas Kumar</span>
                                                                <div className='d-flex commenter-rating'>
                                                                    <Rating defaultValue={4.5} precision={0.5} readOnly sx={{fontSize: "14px"}}/>
                                                                    <small className='ms-2'>2 months ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <MoreVertIcon />
                                                        </div>
                                                    </div>
                                                    <div className='comment-txt'>
                                                        <p>
                                                            My name is Onu Princeley Toochukwu. I want to say a very big thank you to 
                                                            Udemy management and Dr Angela Yu. This course is one of the best decisions i have taken in my life. 
                                                            I must say that i have learnt so much, and
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12, col-md-6'>
                                                <div className='review-card p-2'>
                                                    <div className='review-head mb-4'>
                                                        <div className='d-flex'>
                                                            <Avatar sx={{ bgcolor: "#1c1d1f" }} {...stringAvatar('Kent Dodds')} />
                                                            <div className='ms-3'>
                                                                <span className='commenter-name'>Subas Kumar</span>
                                                                <div className='d-flex commenter-rating'>
                                                                    <Rating defaultValue={4.5} precision={0.5} readOnly sx={{fontSize: "14px"}}/>
                                                                    <small className='ms-2'>2 months ago</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <MoreVertIcon />
                                                        </div>
                                                    </div>
                                                    <div className='comment-txt'>
                                                        <p>
                                                            My name is Onu Princeley Toochukwu. I want to say a very big thank you to 
                                                            Udemy management and Dr Angela Yu. This course is one of the best decisions i have taken in my life. 
                                                            I must say that i have learnt so much, and
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='course-purchase-div sticky-top mx-2'>
                                <div className='video-section mb-3' onClick={handleOpen}>
                                {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' /> */}
                                    {/* <a href="https://www.youtube.com/watch?v=nA1Aqp0sPQo/" >click me </a> */}
                                    <img src="https://rainbowit.net/html/histudy/assets/images/others/video-01.jpg" alt="" />
                                    <div className='video-play'>
                                        <span>
                                           <FaPlay />
                                        </span>
                                    </div>
                                </div>
                                <div className='course-purchase-content'>
                                    <div className='price mb-3'>
                                        <span>₹3,499</span><del> ₹5,499</del>
                                    </div>
                                    <div className='d-flex justify-content-between mb-3'>
                                        <div style={{marginRight: "10px", flex:1}}>
                                            <Button variant="outlined" type="text" sx={{fontSize: "14px"}}>
                                                Buy this course
                                            </Button>
                                        </div>
                                        <div style={{}}>
                                            <Button variant="outlined" type="text" sx={{fontSize: "23px", minWidth: "50px"}} >
                                                <FiHeart />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className='w-100 mb-3 d-flex justify-content-center'>
                                        <small style={{fontSize: "12px", color: "#1c1d1f"}}>30-Day Money-Back Guarantee</small>
                                    </div>
                                    <div className='course-stats mt-1'>
                                        <ul className='py-1'>
                                            <li>
                                                <span><IoIosTimer /> Total time</span>
                                                <small>10 Hrs 30 Min</small>
                                            </li>
                                            <li>
                                                <span><BsBook /> Lectures</span>
                                                <small>10</small>
                                            </li>
                                            <li>
                                                <span><AiOutlineNodeCollapse /> Skill Level</span>
                                                <small>Intermidiate</small>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                keepMounted 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                sx={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ReactPlayer playing={open} controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default CourseDetails