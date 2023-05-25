import {Box, Button,TextField, InputAdornment} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import {FaLock} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {SiFacebook} from 'react-icons/si'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { useUserLogInMutation ,useFaceBookSignInMutation} from '../../service/authApis'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {loginSuccess} from '../../features/LogIn/loginSlice'
import FacebookLogin from '@greatsumini/react-facebook-login';
import {setSnackBar} from '../../features/SnackBar/SnackBar'
import "./LogIn.css"
import { LoginSocialGoogle, LoginSocialFacebook, LoginSocialGithub, 
    LoginSocialInstagram, LoginSocialLinkedin,
    } from 'reactjs-social-login';

export default function LogInPage(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuthenticated } = useSelector(state => state.login);


    const [formData, setFormData] = useState({
        email : {value: "", error: false, msg: ""},
        password : {value: "", error: false, msg: ""}}
    );
                                    
    const { email, password } = formData
    const [userLogIn, {data, error: LoginError, isLoading, isSuccess: isLoginSuccess}] = useUserLogInMutation()
    const [faceBookSignIn, {data: FacebookData, error: FBLoginError, isLoading: FBLoading, isSuccess: isFacebookSuccess}] = useFaceBookSignInMutation()

    const onChange = (event) =>{
        setFormData( (prevState) =>({...prevState, [event.target.name] : {...prevState[`${event.target.name}`],
            value: event.target.value, error: false } 
        }))
    }

    const formSubmit = async (event) =>{
        event.preventDefault()
        if (!email.value){
            setFormData( (prevState) =>({...prevState, email: {...prevState.email, error: true, msg: "This Field is Required"}}))
        }
        if (!password.value){
            setFormData( (prevState) =>({...prevState, password: {...prevState.password, error: true, msg: "This Field is Required" }}))
        }
        if (email.value && password.value){
            await userLogIn({"email": email.value, "password": password.value})
        }
    }

    const FaceBookAuthentication = async (response) =>{
        console.log(response)
        console.log(response.accessToken)
        await faceBookSignIn({
            token: response?.accessToken,
            backend: 'facebook', grant_type: 'convert_token',
            client_id: 'Bv4FcbBW8C610joufz4ymkXhvXhn4cAYJBboANUP',
            client_secret: 'Vap4r6xyca2Fwc1CbXqRYx6KqPnrBKXuE3x9FRXNMuy3zAQw5bwoOx4rA5QsXbEBBreC0p5F1qy7untGfNxXDb5Uy9tq4TkPI84Ng3Zrur0thJdZ4RI1V4Jf2EgIhogJ',
        })
    }
    const googleAuthentication = async (response) =>{
        console.log(response)
        await faceBookSignIn({
            // token: response?.accessToken,
            token: response?.data?.access_token,
            backend: 'google-oauth2', grant_type: 'convert_token',
            client_id: 'SGSuNDJBgMWJ8YJg3iTfGJIccTNfRZJfWw8FRo68',
            client_secret: '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',
        })
    }

    useEffect(() => {
        if (isAuthenticated){
            navigate('/')
        }

        if(isLoginSuccess){
            dispatch(loginSuccess(data))
            dispatch(setSnackBar({message: "Login Successfull", severity: "success" }))
        }
        if(LoginError?.data?.email){
            setFormData( (prevState) =>({...prevState, email: {...prevState.email, error: true, msg: LoginError.data.email}}))
        }
        if(LoginError?.data?.password){
            setFormData( (prevState) =>({...prevState, password: {...prevState.password, error: true, msg: LoginError.data.password}}))
        }

        if(isFacebookSuccess){
            dispatch(loginSuccess(FacebookData))
            dispatch(setSnackBar({message: "Login Successfull", severity: "success" }))
        }
    },[LoginError,isLoginSuccess,isFacebookSuccess,FacebookData,dispatch,data,navigate,isAuthenticated]);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="authentication-upper">
                    <span className="auth-header">Log in to Udacity account</span>
                    <div className="auth-inner">
                        <div className="social-auth">
                            <FacebookLogin
                                appId="849599103051639"
                                onSuccess={FaceBookAuthentication}
                                onFail={(error) => {
                                    console.log('Login Failed!', error);
                                }}
                                onProfileSuccess={(response) => {
                                    console.log('Get Profile Success!', response);
                                }}
                                style={{
                                    textAlign: "left",
                                    backgroundColor: "transparent",
                                  }}
                            >
                                <div style={{paddingTop: "2px", paddingBottom: "2px"}}>
                                <SiFacebook style={{"fontSize": "20px"}}/>   Continue with Facebook
                                </div>
                            </FacebookLogin>
                            {/* <LoginSocialFacebook
                                appId="849599103051639"
                                fieldsProfile={
                                    'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
                                }
                                // onLoginStart={onLoginStart}
                                // onLogoutSuccess={onLogoutSuccess}
                                // redirect_uri={REDIRECT_URI}
                                onResolve={FaceBookAuthentication}
                                onReject={err => {
                                    console.log(err);
                                }}
                                style={{
                                    textAlign: "left",
                                    backgroundColor: "transparent",
                                }}
                                >
                                <Button sx={{mt:1}} variant="outlined" startIcon={<SiFacebook />}>
                                    Continue with Facebook
                                </Button>
                            </LoginSocialFacebook> */}
                            <LoginSocialGoogle
                                client_id="461280863536-jfe8tu9jc55quemln19t2n6f4k6k87k5.apps.googleusercontent.com"
                                // onLoginStart={onLoginStart}
                                // redirect_uri={REDIRECT_URI}
                                scope="openid profile email"
                                discoveryDocs="claims_supported"
                                access_type="offline"
                                onResolve={googleAuthentication}
                                onReject={err => {
                                    console.log(err);
                                }}
                                >
                                <Button sx={{mt:1}} variant="outlined" startIcon={<FcGoogle />}>
                                    Continue with Google
                                </Button>
                                
                            </LoginSocialGoogle>
                            {/* <Button sx={{mt:1}} variant="outlined" startIcon={<FcGoogle />}>
                                Continue with Google
                            </Button> */}
                        </div>
                        <div className="mt-1">
                            <Box
                                component="form"
                                // sx={{'& > :not(style)': { m: 0, width: '32ch' },}}
                                noValidate className="login-form"
                                autoComplete="off"
                                onSubmit={formSubmit}
                            >
                                <TextField
                                    fullWidth autoComplete='on' placeholder="Email"
                                    sx={{mt:2,border:1, borderColor: `${email?.error? "red" : "black" }`, borderRadius: 0,outline: 0,p:{xs:"4px 10px",sm:"8px 10px"}}}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{mr:2}}>
                                            <MailIcon style={{"fontSize": '18px'}} />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true
                                    }}
                                    variant="standard" name="email" value={email.value} type="email"
                                    onChange={onChange}
                                />
                                {email?.error? 
                                    <p style={{"fontSize": "12px", color: "red", margin: "0px 0px 5px" }}>{email?.msg}</p>
                                    :
                                    <></>
                                }
                                <TextField
                                    fullWidth
                                    placeholder="Password"
                                    sx={{mt:2,border:1, borderColor: `${password.error? "red" : "black" }`, borderRadius: 0,outline: 0,p:{xs:"4px 10px",sm:"8px 10px"}}}
                                    InputProps={{
                                    startAdornment: (
                                        <InputAdornment sx={{mr:2}} position="start">
                                            <FaLock />
                                        </InputAdornment>
                                    ),
                                    disableUnderline: true
                                    }}
                                    variant="standard" name="password"
                                    value={password.value} type="password"
                                    onChange={onChange}
                                />
                                 {password?.error? 
                                    <p style={{"fontSize": "12px", color: "red", margin: "0px 0px 5px" }}>{password?.msg}</p>
                                    :
                                    <></>
                                }
                                <div className='submit-btn text-center mt-3'>
                                    <Button variant="outlined" type="submit" >
                                        Log In
                                    </Button>
                                    <span className='' style={{'fontSize': "14px"}}>
                                        or <Link to="/forgot-password">Forgot Password</Link>
                                    </span>
                                </div>
                            </Box>
                            <div className='text-center py-4' style={{'fontSize': "14px"}}>
                                <span className='text-center'>
                                    Don't have an account? <Link to="/signup">Sign up</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}




 // const [formData, setFormData] = useState({ email : "", password : "" });
    // const [formError, setFormError] = useState({ emailError : {error: false, msg: ""}, passwordError : {error: false, msg: ""}});

    // const { email, password } = formData
    // const { emailError, passwordError } = formError
    // // const { enqueueSnackbar } = useSnackbar()


    // const [userLogIn, {data, error: LoginError, isLoading, isSuccess: isLoginSuccess}] = useUserLogInMutation()

    // const onChange = (event) =>{
    //     setFormData( (prevState) =>({...prevState, [event.target.name] : event.target.value }) )
    //     setFormError({emailError : {error: false, msg: ""}, passwordError : {error: false, msg: ""} })
    // }
    // const formSubmit = async (event) =>{
    //     event.preventDefault()
    //     if (!email){
    //         setFormError( (prevState) =>({...prevState, emailError: {error: true, msg: "This Field is Required"} }))
    //     }
    //     if (!password){
    //         setFormError( (prevState) =>({...prevState,passwordError: {error: true, msg: "This Field is Required" } }))
    //     }
    //     if (email && password){
    //         await userLogIn(formData)
    //     }
    // }
    // useEffect(() => {
    //     if(isLoginSuccess){
    //         // enqueueSnackbar("Login Successfull", "success")
    //         // toast.success("Login Successfull");
    //         dispatch(loginSuccess(data))
    //         navigate('/')
    //     }
    //     if(LoginError?.data?.email){
    //         setFormError( (prevState) =>({...prevState, emailError: {error: true, msg: LoginError.data.email}}))
    //     }
    //     if(LoginError?.data?.password){
    //         setFormError( (prevState) =>({...prevState,passwordError: {error: true, msg: LoginError.data.password }}))
    //         // toast.error("Invalid Credential");
    //     }
    // },[LoginError,isLoginSuccess,dispatch,data,navigate]); 