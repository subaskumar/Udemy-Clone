import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useUserRegistrationMutation } from '../../service/authApis';
import "./LogIn.css"


export default function SignUp(){
    const navigate = useNavigate()
    const [signupForm, setRegisterData] = useState({
        name: {value: "", error: false, msg: ""}, 
        email: {value: "", error: false, msg: ""},
        password : {value: "", error: false, msg: ""}
    });

    const {name, email, password } = signupForm
    const [userRegistration, {data, error: signupError, isLoading, isSuccess: isSignupSuccess}] = useUserRegistrationMutation()

    const onChangeRegister = (event) =>{
        setRegisterData((prevState) =>({...prevState, [event.target.name] : {...prevState[`${event.target.name}`],
            value: event.target.value, error: false, msg:""}
        }))
    }

    const handelSignup = async (event) =>{
        const nameReg = /^[a-zA-Z]+ [a-zA-Z]+$/
        const emailReg= /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        const passReg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        event.preventDefault()
        if(!nameReg.test(name?.value)){
            setRegisterData((prevState) =>({...prevState, name: {...prevState.name, error: true, msg: "Please enter your full name (first & last name)."}}))

        }
        if(!emailReg.test(email?.value)){
            setRegisterData((prevState) =>({...prevState, email: {...prevState.email, error: true, msg: "Please enter Valid Email, e.g - example@email.com."}}))
        }
        if(!passReg.test(password?.value)){
            setRegisterData((prevState) =>({...prevState, password: {...prevState.password, error: true,
                msg: "Password must contain one upper,lower alphabets, digit, special symbol & minimum length is 8"}}))
        }

        if (email?.value && password?.value && name?.value){
            if(nameReg.test(name?.value) && emailReg.test(email?.value) && passReg.test(password?.value)){
             await userRegistration({"name": name.value, "email": email.value, "password": password.value})
            }
        }
        else{
            for(let i=0; i< event.currentTarget.length-2; i++){
            let x = event.currentTarget[i]
                if(x.value ==="" && x.required){
                    setRegisterData((prevState) =>({...prevState, [`${x.name}`]: {...prevState[`${x.name}`], error: true, msg: "This Field is Required"}}))
                }
            }
        }
    }

    useEffect(() => {
        if(isSignupSuccess){
            toast.success("Registration Successfull");
            navigate('/login')
        }
        if(signupError?.data){
        
            if(signupError?.data.email){
                setRegisterData((prevState) =>({...prevState, email: {...prevState.email, error: true, msg: signupError?.data.email}}))
            }
            else{
                    toast.error("Something Wrong");
            }
        }
    },[isSignupSuccess,signupError,navigate]); 


    return (
        <>
            <div className="container-fluid mt-5">
                <div className="authentication-upper">
                    <span className="signup-header p-0 ms-4">Sign up and start learning</span>
                    <div className="auth-inner">
                        <div className="login-form mt-2">
                            <Box
                                onSubmit={handelSignup}
                                component="form"
                                noValidate className="signup-form"
                                autoComplete="off"
                            >
                                <TextField sx={{border:1,borderRadius: 0,outline: 0}}
                                    fullWidth InputProps={{ disableUnderline: true }}
                                    id="filled-basic" 
                                    label="Full Name" 
                                    variant="filled"
                                    required
                                    onChange={onChangeRegister}
                                    name="name" value={name.value} type="text"
                                />
                                {name?.error? 
                                    <p style={{"fontSize": "13px", color: "red", margin: "3px 0px 5px" }}>{name?.msg}</p>
                                    :
                                    <></>
                                }
                                <TextField sx={{mt:1,border:1,borderRadius: 0,outline: 0}}
                                    fullWidth InputProps={{ disableUnderline: true }}
                                    id="filled-basic" 
                                    label="Email" 
                                    variant="filled"
                                    required
                                    onChange={onChangeRegister}
                                    name="email" value={email.value} type="email"
                                />
                                {email?.error? 
                                    <p style={{"fontSize": "13px", color: "red", margin: "3px 0px 5px" }}>{email?.msg}</p>
                                    :
                                    <></>
                                }
                                <TextField sx={{mt:1,border:1,borderRadius: 0,outline: 0}}
                                    fullWidth InputProps={{ disableUnderline: true }}
                                    id="filled-basic" 
                                    label="Password" 
                                    variant="filled"
                                    required
                                    onChange={onChangeRegister}
                                    name="password" value={password.value} type="password"
                                />
                                {password?.error? 
                                    <p style={{"fontSize": "13px", color: "red", margin: "3px 0px 5px" }}>{password?.msg}</p>
                                    :
                                    <></>
                                }
                                <div className='submit-btn text-center'>
                                    <FormControlLabel className='check-for-notifiction'
                                        control={<Checkbox defaultChecked />} label="Send me special offers, personalized recommendations, and learning tips." 
                                    />
                                    <Button variant="outlined" type="submit">
                                        Sign up
                                    </Button>
                                    <p style={{"fontSize": "11px", "whiteSpace": "nowrap","letterSpacing": "-0.3px"}}>By signing up, you agree to our <Link to="/">Terms of Use</Link> and <Link to="/">Privacy Policy.</Link></p>
                                </div>
                            </Box>
                            <div className='text-center py-3 border-top' style={{'fontSize': "14px"}}>
                                <span className='text-center'>
                                Already have an account? <Link to="/login">Log in</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}