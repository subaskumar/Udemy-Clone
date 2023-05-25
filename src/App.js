import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout"
import {CustomizedSnackbars} from "./components"
import { Home, Course, CourseDetails, LogInPage, SignUp, 
  ForgotPassword, StudentDashBoard, MyCourseViewSection } from './pages'
import {useLogInUserProfileQuery} from './service/authApis'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from "react";
import {setUserProfile} from './features/LogIn/loginSlice'
import "./index.css"

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.login);
  const { data: profileData, error, isLoading, isSuccess: isProfileSuccess } = useLogInUserProfileQuery(undefined,{skip: !isAuthenticated});

  useEffect(() => {
    if (isProfileSuccess){
      dispatch(setUserProfile(profileData))
    }

  },[isProfileSuccess,profileData,dispatch]) 

  return (
    <>
      <BrowserRouter>
        <Layout>
        <CustomizedSnackbars />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<LogInPage/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="courses" >
              <Route index element={<Course />} />
              <Route>
                <Route path=":category" >
                  <Route index element={<Course />} />
                  <Route path=":subcategory" element={<Course />}/>
                </ Route>
              </ Route>
            </Route>
            <Route exact path="/course-details/:slug" element={<CourseDetails/>}/>
            <Route exact path="/home/my-courses" element={<StudentDashBoard/>}/>
            <Route exact path="/home/my-course/watching/:slug" element={<MyCourseViewSection/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
