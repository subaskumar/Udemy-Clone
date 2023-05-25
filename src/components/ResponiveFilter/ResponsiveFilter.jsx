import React, {  useRef, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import { useNavigate,useParams, useSearchParams } from 'react-router-dom';
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import "./ResponsiveFilter.css"
import { useDispatch, useSelector } from "react-redux";
import {LanguageFilter, ratingFilter} from "../../Variable/Variable"
import {useGetAllSubCategoryQuery} from "../../service/educationApis"


const FilterForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { subCategoryData } = useSelector(state => state.education);
  const [expanded, setExpanded] = useState(
    { "rExpand": true, "lExpand": false, "scExpand": false }
  );

  const [overflow, setOverflow] = useState(false);
  const ratingsf = searchParams.getAll('rating'),
   categoriesf = searchParams.getAll('category'),
   languagesf = searchParams.getAll('language');

  const showFilterCheckBox = (event) => {
      event.target.nextElementSibling.classList.toggle('show_filter_checkbox');
      event.target.classList.toggle('active');
  }
  const handleChange = (event) =>{
    const value = event.target.value
    const checked = event.target.checked
    const name = event.target.name
    if(checked){
      // This Code For update value of array inside object
      // setCourseFilters((prev) =>({...prev, [name] : [...prev[`${name}`], value] }) )
      setSearchParams([...searchParams.entries(), [name, value]]);
    }
    else{
      // This Code For Remove value of array inside object
      // setCourseFilters((prev) =>({...prev, [name] : prev[`${name}`].filter((e) => (e !== value)) }))
      const entries = searchParams.getAll(`${name}`)
      const newEntries = entries.filter(entry => entry !== value);
      searchParams.delete(`${name}`);
      newEntries.forEach(newEntry => searchParams.append(`${name}`, newEntry));
      setSearchParams(searchParams);
    }
  }

  return (
    <>
      <div className='filter-inner-div '>
        <form className='filter-form'>
          <div className='filter-field'>
            <div className='filter-head' onClick={(event) => {showFilterCheckBox(event);}}>
              <h3 className=''>Ratings</h3>
                <IoIosArrowUp />
            </div>
            <div className='pb-4 filter-content-main show_filter_checkbox'>
              <div className={`mb-2 ${!expanded.rExpand && ratingFilter.length >4 ? 'show-more-content': ''}`} style={{
                  position: 'relative', overflow: 'hidden',
                  //  height: (expanded.rExpand ? null : '8.3rem')
                 }}
                  ref={v => v && setOverflow(v.offsetHeight < v.scrollHeight)}
              >
                <div className=''>
                {ratingFilter.map((rating)=> (
                  <>
                    <input type='checkbox' id={rating?.title} name="rating"
                      value={rating?.value} onChange={handleChange} 
                      checked={ratingsf?.includes(String(rating?.value))}
                    />
                    <label for='star-5p'>
                      <Stack spacing={1} className='d-inline-block'>
                        <Rating className='filter-rating-star' name='half-rating-read'
                          defaultValue={rating?.value} precision={0.5}  readOnly
                        />
                      </Stack>
                      <span className='float-end ms-2'>
                        {rating.title}
                        <small className='ms-2 text-secondary'>({rating.no_review}) </small>
                      </span>
                    </label> <br />
                  </>
                ))}
                </div>
              </div>
              {ratingFilter.length > 4 &&
                <>
                  {!expanded.rExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, rExpand : true} )) } className="show-more-less mt-5">
                      Show more  <IoIosArrowDown />
                    </span>
                  }
                  {expanded.rExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, rExpand : false}))} className="show-more-less mt-5">
                      Show less   <IoIosArrowUp />
                    </span>
                  }
                </>
              }
            </div>
          </div>

          <div className='filter-field'>
            <div className='filter-head' onClick={(event) => {showFilterCheckBox(event);}}>
              <h3 className='fs-5'>Catagory</h3>
              <IoIosArrowUp />
            </div>
            <div className='pb-4 filter-content-main show_filter_checkbox'>
              <div className={`mb-3 ${!expanded.scExpand && subCategoryData?.results?.length >4 ? 'show-more-content': ''}`} style={{
                position: 'relative', overflow: 'hidden', 
                // height: (subCategoryData?.results?.length > 4 ? '8.3rem' : null)
              }}
                ref={v => v && setOverflow(v.offsetHeight < v.scrollHeight)}
              >
                <div className=''>
                {subCategoryData?.results?.map((sCategory)=> (
                  <>
                    <input type='checkbox' id={sCategory.id} name="category" 
                      value={sCategory.id} onChange={handleChange} 
                      checked={categoriesf?.includes(String(sCategory?.id))}
                    />
                    <label for={sCategory.title}> {sCategory.title}</label> <br />
                  </>
                ))}
                </div>
              </div>
              {subCategoryData?.results?.length > 4 &&
                <>
                  {!expanded.scExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, scExpand : true} )) } className="show-more-less">
                      Show more  <IoIosArrowDown />
                    </span>
                  }
                  {expanded.scExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, scExpand : false}))} className="show-more-less">
                      Show less   <IoIosArrowUp />
                    </span>
                  }
                </>
              }
            </div>
          </div>

          <div className='filter-field'>
            <div className='filter-head' onClick={(event) => {showFilterCheckBox(event);}}>
              <h3 className='fs-5'>Languages</h3>
              <IoIosArrowUp />
            </div>
            <div className='pb-4 filter-content-main'>
              <div className={`mb-3 ${!expanded.lExpand && LanguageFilter.length > 4 ?'show-more-content' : ''}`} style={{
                position: 'relative', overflow: 'hidden', 
                // height: (expanded.lExpand ? null : '9.2rem')
                }}
                ref={v => v && setOverflow(v.offsetHeight < v.scrollHeight)}
              >
                <div className=''>
                  {LanguageFilter.map((language)=> (
                  <>
                    <input type='checkbox' id={language.title} name="language" 
                      value={language.value} onChange={handleChange} 
                      checked={languagesf?.includes(String(language?.value))}
                    />
                    <label for={language.title}> {language.title}</label> <br />
                  </>
                  ))
                }
                </div>
              </div>
              {LanguageFilter.length > 4 &&
                <>
                  {!expanded.lExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, lExpand : true} )) } className="show-more-less">
                      Show more  <IoIosArrowDown />
                    </span>
                  }
                  {expanded.lExpand &&
                    <span onClick={() => setExpanded((prevState) =>({...prevState, lExpand : false}))} className="show-more-less">
                      Show less   <IoIosArrowUp />
                    </span>
                  }
                </>
              }
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export const ResponsiveFilter = () =>{

    // const navRef = useRef()
    // const resNavRef = useRef()
    // const showFilterBar = () =>{
    //     navRef.current.classList.toggle('responsive_nav')
    //     resNavRef.current.classList.toggle('responsive_nav_main')
    // }

    return (
        <>      
        </>
    )
}

export default FilterForm;


// console.log(event.target.children[1])
// const p = event.target.nextElementSibling
// p.current.classList.toggle('show_filter_checkbox')

// [...ratingArr, value]
// ratingArr.filter((e) => (e !== value))