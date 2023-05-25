import { Link} from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useGetAllCategoryQuery } from '../../service/educationApis'
import "./Dropdown.css"
// import {useState, useEffect} from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import {setAllCategory} from '../../features/educations/educationSlice'


export default function CourseDropdown({isOpen}){
    const { data, error, isLoading, isSuccess } = useGetAllCategoryQuery({selectCategory:undefined})
    const showSubCategory = (event) => {
        event.target.querySelector("ul").classList.add('active-subContent');
      }
    const removeSubCategory = (event) => {
        event.target.querySelector("ul").classList.remove('active-subContent');
      }

    return (
        <>
        {isSuccess?
            <div className={`category_dropdown ${isOpen ? "displayDropdown": ""} `}>
                <ul className={`category_content`} onMouseLeave={(event) => {removeSubCategory(event);}}>
                    {data?.results?.map((item) => (
                        <li key={item.id} onMouseLeave={(event) => {removeSubCategory(event);}} 
                            // onBlur={(event) => {removeSubCategory(event);}}
                            onMouseEnter={(event) => {showSubCategory(event);}}>
                            <Link to={`/courses/${item.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/`} style={{"fontWeight": 200,}}>
                                {item.title} 
                                <MdKeyboardArrowRight/>
                            </Link>
                            <ul className="subCategory-content" onMouseLeave={(event) => {removeSubCategory(event);}} >
                                {item.sub_category.map((subItem) => (
                                    <li key={subItem.id}>
                                        <Link to={`/courses/${item.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/${subItem.title.replace(/\s+/g, '-').replace("&", "and").toLowerCase()}/`} style={{"fontWeight": 200, "fontSize": "13px"}}>
                                            {subItem.title}
                                            <MdKeyboardArrowRight/>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>              
                    ))}
                </ul>
            </div>
            :
            <>
            </>
        }
        </>
    )

}