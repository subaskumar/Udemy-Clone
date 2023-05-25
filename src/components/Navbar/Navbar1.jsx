import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineSearch , AiOutlineClose,} from 'react-icons/ai'
import { IoMdMenu} from 'react-icons/io'
// import {FaBars,FaTimes} from 'react-icons/fa'
// import {IoMdMenu}

import './Navbar1.css';

const Navbar1 = () => {
    const navRef = useRef()
    const resNavRef = useRef()
    const searchRef = useRef()
    const mainNavRef = useRef()

    const showNavbar = () =>{
        navRef.current.classList.toggle('responsive_nav')
        resNavRef.current.classList.toggle('responsive_nav_main')
    }
    
    const showSearchForm = () =>{
        searchRef.current.classList.toggle('search_form_full_nav')
        mainNavRef.current.classList.toggle('main_nav')
    }

  return (
    <>
        <div className='container-fluid top-bar d-none d-md-block' ref={mainNavRef}>
            <div className='row align-items-center' style={{"padding": '12px 7px',}}>
                <div className='col-3 col-md-3 col-lg-2'>
                    <Link className='text-decoration-none' to="/">
                        <h1><span className='logo-name ms-3'>U</span>dacity</h1>
                    </Link>
                </div>
                <div className='col-3 col-md-3 col-lg-4  col-xl-5 d-none d-lg-block '>
                    <form class="form-inline search-form d-flex justify-content-start">
                        {/* <button type="submit" class="fa fa-search"> </button> */}

                        <AiOutlineSearch className='search-btn' />
                        <input type="text" placeholder="Search for anything..." />
                    </form>
                </div>
                <div className='col-9 col-md-9 col-lg-6 col-xl-5'>
                    <div class="d-flex justify-content-end" id="mynavbar">
                        <Link to="/courses/" class="nav-item nav-link d-none d-md-block">Courses</Link>
                        <Link to="/" class="nav-item nav-link d-none d-md-block">My Course</Link>
                        <Link to="/" class="nav-item nav-link d-block d-lg-none fs-5" onClick={showSearchForm}><AiOutlineSearch className='fs-4' /></Link>
                        <Link to="/" class="nav-item nav-link me-md-3"><AiOutlineShoppingCart className='fs-5 fw-bold position-relative'/> <span className='rounded-circle cart-span'>2</span></Link>
                        <Link to="/login" class="border border-dark text-decoration-none text-dark text-center d-none d-md-block me-3 auth">Log in</Link>
                        <Link to="/signup" class="border border-dark text-decoration-none bg-dark text-white text-center d-none d-md-block auth">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className='container-fluid top-bar d-md-none py-1' ref={mainNavRef}>
            <div className='row align-items-center py-2 '>
                <div className='col-4'>
                    <IoMdMenu className='menu' onClick={showNavbar}/>
                </div>
                <div className='col-4 text-center'>
                    <a className='text-decoration-none' href>
                        <h1 className='m-0'><span className='logo-name'>U</span>dacity</h1>
                    </a>
                </div>
                <div className='col-4'>
                    <div class="d-flex justify-content-end" id="mynavbar">
                        <Link to="/" class="nav-item px-2 fs-5"><AiOutlineSearch onClick={showSearchForm} className='fs-4'/></Link>
                        <Link to="/" class="nav-item px-2 me-md-3"><AiOutlineShoppingCart className='fs-4 fw-bold'/><span className='rounded-circle cart-span'>2</span> </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='container-fluid res-nav p-0 d-md-none' onClick={showNavbar} ref={resNavRef}>
            <div className='custome-nav-link position-relative' ref={navRef}>
                <div className='border border-bottom-2 py-1 '>
                    <Link to="/login" class="nav-item nav-link fw-normal">Log in</Link>
                    <Link to="/signup" class="nav-item nav-link fw-normal">Sign up</Link>  
                </div>
                <div>
                    <Link to="/courses/" class="nav-item nav-link" >Courses</Link>
                    <Link to="/" class="nav-item nav-link" >My Course</Link>
                </div>

                <button className='my-btn-close position-absolute ' >
                        <AiOutlineClose />
                </button>
            </div>
        </div>

        <div className='row border border-1 search-form-main d-lg-none p-0' ref={searchRef}>
            <form class="form-inline search-form-click d-flex justify-content-start" >
                <div className='text-center me-2 me-sm-0' style={{"width": "7%"}}>
                    <AiOutlineSearch className='search-btn' style={{"cursor": "pointer"}} />
                </div>
                <div style={{"width": "75%"}}>
                    <input type="text" placeholder="Search for anything..." />
                </div>
                <div className='text-end pe-md-3' style={{"width": "18%"}}>
                    <AiOutlineClose className='fw-bolder fs-5' style={{"cursor": "pointer"}} onClick={showSearchForm}/>
                </div>
            </form>
        </div>
    </>
  )
}

export default Navbar1