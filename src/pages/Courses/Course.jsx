import "./Course.css"
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import {useGetAllSubCategoryQuery} from "../../service/educationApis"
import {setSubCategory} from "../../features/educations/educationSlice"
import {CourseListing,PopularTrendingCourses,
    PopularTopic,PopularInstructors} from "../../contents"
import { useGetAllCategoryQuery } from '../../service/educationApis'


const Course = () =>{
    const { category, subcategory } = useParams()
    const dispatch = useDispatch()
    let selectCategory = category?.replace(/-/g, ' ').replace("and", "%26")
    let selectSubCategory = subcategory?.replace(/-/g, ' ').replace("and", "&")
    const { data: selectedCategory, isSuccess } = useGetAllCategoryQuery({selectCategory})
    const subCategoryObj = selectedCategory?.results[0]?.sub_category?.find(item => item?.title?.toLowerCase() === selectSubCategory)

    return (
        <>
            <div className='container-fluid bg-body border border-top course-category-nav d-none d-sm-block mt-5'>
                <ul className='d-flex mt-4'>
                    <li>
                        <Link to={`/courses/${selectedCategory?.results[0]?.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/`} class="nav-item nav-link" style={{"fontWeight": 700}}>{selectedCategory?.results[0].title}</Link>
                    </li>
                    <div>
                        <svg width="53" height="47" viewBox="0 0 53 233" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 232.547L51.5 116.5L1.25 0.452606" stroke="#b2b6b9" stroke-width="3"/>
                        </svg>
                    </div>
                    {selectedCategory?.results[0]?.sub_category?.map((item) => (
                        <li>
                            <Link to={`/courses/${selectedCategory?.results[0]?.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/${item.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/`} class="nav-item nav-link">{item.title}</Link>
                        </li>   
                    ))}
                </ul>

            </div>

            {/* Here We have to add sub-category id props by calling 
            sub-category api using selectedSubcategory title */}

            <PopularTrendingCourses 
                selectCategory={selectedCategory?.results[0]?.title}
                cid={selectedCategory?.results[0]?.id}
                selectSubCategory={subCategoryObj?.title}
                sid={subCategoryObj?.id}
            />
            <PopularTopic />
            <PopularInstructors />
            <CourseListing 
                selectCategory={selectedCategory?.results[0]?.title}
                cid={selectedCategory?.results[0]?.id}
                selectSubCategory={subCategoryObj?.title}
                sid={subCategoryObj?.id}
            />
    
        </>
    )
}

export default Course