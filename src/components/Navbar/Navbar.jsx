import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {IoIosMenu} from 'react-icons/io'

import './Navbar.css';

const Navbar = () => {

  return (
    <>
      <div className='container-fluid d-none d-lg-block border-bottom top-bar'>
        <div className='row align-items-center py-3 px-lg-5'>
          <div className='col-lg-3'>
            <a className='text-decoration-none' href>
              <h1><span className='logo-name'>U</span>dacity</h1>
            </a>
          </div>
          <div className='col-lg-3 text-end'>
            <div className='d-inline-flex align-items-center'>
              <i className="fa fa-2x fa-map-marker-alt me-3"></i>
              <div className='text-start'>
                <h6 className='mb-1'>Our Office</h6>
                <small>Nimapada,Puri,Odisha</small>
              </div>
            </div>
          </div>
          <div className='col-lg-3 text-end'>
            <div className='d-inline-flex align-items-center me-1'>
              <i className="fa fa-2x fa-envelope me-3"></i>
              <div className='text-start'>
                <h6 className='mb-1'>Email Us</h6>
                <small>subas.mk01@gmail.com</small>
              </div>
            </div>
          </div>
          <div className='col-lg-3 text-end'>
            <div className='d-inline-flex align-items-center me-4'>
              <i className="fa fa-2x fa-phone me-3"></i>
              <div className="text-start">
                <h6 className='mb-1'>Contact Us</h6>
                <small>+91 9090157149</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid custome-navbar'>
        <div className='row'>
          <div className='col-lg-3 d-none d-lg-block'>
            {/* <a class="d-flex align-items-center justify-content-between w-100 text-decoration-none fw-bold subjects" data-bs-toggle="dropdown" href>
              <h5 className=""><i class="fa fa-book-open me-3"></i>Subjects</h5>
              <i class="fa fa-angle-down me-5"></i>
            </a>
            <nav class="collapse position-absolute dropdown-menu align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
              <div class="navbar-nav w-100">
                  <a href class="nav-link" data-toggle="dropdown">Web Design <i class="fa fa-angle-down float-right mt-1"></i></a>
                  <a href class="nav-item nav-link">Apps Design</a>
                  <a href class="nav-item nav-link">Marketing</a>
                  <a href class="nav-item nav-link">Research</a>
                  <a href class="nav-item nav-link">SEO</a>
              </div> */}
            {/* </nav> */}
          </div>

          <div className='col-lg-9'>
            <nav class="navbar navbar-expand-lg bg-light navbar-light lower-nav">
              <a className='text-decoration-none d-block d-lg-none' href>
                <h1 className='mt-1'><span className='logo-name'>U</span>dacity</h1>
              </a>
              <div className='d-flex text-end mobile-nav'>
                <AiOutlineShoppingCart className='d-block d-lg-none me-4 me-md-5 mt-2 m-cart'/>
                <a class="fw-bolder text-decoration-none text-dark d-block d-lg-none me-4 me-md-5 mt-1" href>Log in</a>
                <button class="custome-navbar-toggler border-0 d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" >
                  <IoIosMenu className='menu-icon'/>
                </button>
              </div>
              <div class="collapse navbar-collapse ms-5 text-center justify-content-center px-2" id="mynavbar">
                <div class="navbar-nav m-4 m-lg-0">
                    <Link to="/" className="nav-item nav-link active me-5">Home</Link>
                    <Link to="/courses/" className="nav-item nav-link me-4">Courses</Link>
                    <Link to="/" className="nav-item nav-link me-4">My Course</Link>
                    <Link to="/" className="nav-item nav-link me-4">Teachers</Link>
                    <Link to="/" className="nav-item nav-link me-4">About</Link>
                </div>
                
                <AiOutlineShoppingCart className='fs-4 ms-3 me-4 cart d-none d-lg-block'/>
                <a class="border border-dark text-decoration-none text-dark d-none d-lg-block me-2 auth" href>Log in</a>
                <a class="border border-dark text-decoration-none bg-dark text-white d-none d-lg-block auth" href>Sign up</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );

};

export default Navbar
