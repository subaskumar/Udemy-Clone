import React, { useRef, useState, useEffect } from 'react'
import './CourseListing.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link, useSearchParams } from 'react-router-dom';
import { RiFilter3Line } from 'react-icons/ri'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination';
import {MultipleSelectPlaceholder,FilterForm} from "../../components"
import { AiOutlineClose} from 'react-icons/ai'
import {setSubCategory} from "../../features/educations/educationSlice"
import { useGetAllCoursesQuery , useGetAllSubCategoryQuery} from '../../service/educationApis'


const CourseListing = ({selectCategory, cid, selectSubCategory, sid}) => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  // const { category, subcategory } = useParams()
  const page = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1
  const upperFilterFormRef = useRef()
  const filterMainDivRef = useRef()
  const ratings = searchParams.getAll('rating'),
        categories = searchParams.getAll('category'),
        languages = searchParams.getAll('language');
  const limit = 7
  const [offset, setOffSet] = useState(limit * (page-1))
  const {data: allCourses, isSuccess: isAllCourseSuccess} = useGetAllCoursesQuery({
      limit, offset, ratings, categories, languages
    })

  const {data: subCategoryData, isSuccess: isSubCategorySuccess} = useGetAllSubCategoryQuery({cid, sid })
  const showFilterBar = () =>{
      upperFilterFormRef.current.classList.toggle('inner-filter-main')
      filterMainDivRef.current.classList.toggle('res_filter_main')
  }

  const onPageChange = (event , value) => {
    setSearchParams({page: value})
    // window.location.reload(false);
    setOffSet(limit * (value-1))
  }
  useEffect(() => {
    if(isSubCategorySuccess){
      dispatch(setSubCategory(
          {subCategoryData: subCategoryData}
        ))
      }
  },[isSubCategorySuccess, dispatch, subCategoryData]);

    
  return (
    <>
    {isAllCourseSuccess?
      <>
        <section id='course-listing'>
          <div
            className='container-fluid px-sm-4'
            style={{letterSpacing: '-0.5px' }}
          >
            <h5 className='ms-1 mt-5'>All {selectSubCategory ? selectSubCategory : selectCategory} Courses</h5>
            <div className='row justify-content-between mt-3 mt-md-4'>
              <div className='col-12 col-md-6 d-flex course-filter'>
                <div className='mx-1 my-2 border border-dark filter-btn'  onClick={showFilterBar}
                  style={{ cursor: 'pointer', 'white-space': 'nowrap', }} 
                  >
                  <span className='border-none outline-none'>
                    <RiFilter3Line className='fs-5 me-2 mb-1' />
                    Filter
                  </span>
                </div>
                <div className='mx-1 my-2 d-flex' style={{ fontSize: '15px' }} >
                  {/* <small
                    className='ms-3'
                    style={{ display: 'inline-block',
                      width: '100%', fontWeight: '600', fontSize: '12px',padding: '5px 0px 0px 0px', fontFamily: "sans-self"}}
                  > Sort by
                  </small> */}
                  <MultipleSelectPlaceholder />
                </div>
              </div>
              <div className='col-12 col-md-4 text-end result d-none d-md-block'>
                10,000 Results{' '}
              </div>
            </div>
            <div className='row mt-3'>
              <div className='ps-3 d-none d-lg-block' style={{"width": "18.2rem"}}>
                <FilterForm />
              </div>
              {/* {isAllCourseSuccess.map()} */}
              <div className='col-lg-9 col-12 d-flex course-list' style={{"flex": 1}}>
                  <div className='ms-0 ms-lg-3 mt-3 mt-lg-0'>
                      {allCourses?.results?.map((course) =>(
                          <div className='row border-bottn course-padding mx-1 mx-lg-3 course-listing-main'>
                              <div className='col-30 p-0'>
                                  <div className='me-0'>
                                      <img src={course.banner_image} alt="course" />
                                  </div>
                              </div>
                              <div className='col-55'>
                                  <div className='Course-listing-info p-0 ps-sm-2'>
                                    <div className='course-listing-head'>
                                      <span >
                                          {course.title}
                                      </span>
                                    </div>
                                    <div className='course-listing-description mt-sm-2'>
                                      <span className='d-none d-md-block'>
                                          {course.short_description}
                                      </span>
                                    </div>
                                    <div className='d-none d-sm-block'>
                                          <small className='text-secondary'>{course.instructor}</small>
                                    </div>
                                    <div className='course-listing-star d-flex p-0' >
                                        <small className='p-0 m-0'> {course.rating} </small>
                                        <Stack spacing={1} className='ms-1'>
                                            <Rating className='course-rating-star' name='half-rating-read'
                                                  value={course.rating} precision={0.5}  readOnly
                                            />
                                        </Stack>
                                        <small className='text-secondary ms-1'>
                                              {course? course.total_review : 0}
                                        </small>
                                    </div>
                                    <div>
                                        <small className='p-0'>{course.total_time} - {course.total_lectures} lectures</small>
                                    </div>
                                    {course.is_bestseller? (
                                      <div>
                                        <div className='best-seller mt-1'>
                                          Bestseller
                                        </div>
                                      </div>
                                      ) : <></> 
                                    }
                                  </div>
                              </div>
                              <div className='col-15 text-center course-price'>
                                  <span>Rs. {course.price}</span>
                              </div>
                              <Link to={`/course-details/${course?.slug}/`} class="nav-item nav-link" />
                          </div>
                      ))}

                      <div className='row my-5 pagination'> 
                        <div className='d-none d-sm-block'>
                          <Stack spacing={5} >
                          {/* <Pagination count={10} variant="outlined" color="primary"/> */}
                              <Pagination size='large' count={ Math.ceil(allCourses.count/limit)} variant="outlined" color="secondary"
                                page={page}
                                onChange={onPageChange}
                              />
                          </Stack>
                        </div>
                        <div className='d-block d-sm-none'>
                          <Stack spacing={2}>
                              <Pagination size='medium' count={Math.ceil(allCourses.count/limit)} variant="outlined" color="secondary"
                               page={page}
                               onChange={onPageChange} 
                              />
                          </Stack>
                        </div>
                      </div>
                  </div>            
              </div>
            </div>
          </div>
        </section>
        <div className='container-fluid filter-responsive p-0 d-lg-none' ref={filterMainDivRef}>
          <div className='filter-main-content' ref={upperFilterFormRef}>
            <div className='text-center shadow-lg p-3 mb-2 bg-body rounded'>
                10,000 Results{' '}
            </div>
            <div className='py-1 px-3'>
              <FilterForm 
              />
              
            </div>
            <button className='my-btn-close position-absolute ' onClick={showFilterBar}>
              <AiOutlineClose />
            </button> 
          </div>
        </div>
      </>
      :
      <>
      </>
    }
    </>
  )
}

export default CourseListing
