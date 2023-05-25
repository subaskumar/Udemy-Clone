import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ForgotPassword(){

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="authentication-upper">
                    <span className="forgot-password-head">Forgot Password</span>
                    <div className="mt-4">
                        <Box
                            component="form"
                            noValidate className="px-4"
                            autoComplete="off"
                        >
                                <TextField
                                    fullWidth
                                    id="input-with-icon-textfield" placeholder="Email"
                                    sx={{border:1,borderRadius: 0,outline: 0,p:{xs:"3px 10px",sm:"4px 10px"}}}
                                    InputProps={{
                                    disableUnderline: true
                                    }}
                                    variant="standard"
                                />
                            <div className='forgot-submit-btn mt-3'>
                                <Button variant="outlined">Reset password</Button>
                                {/* <Button variant="outlined" className='me-4'>
                                    Reset password
                                </Button> */}
                                or
                                <Link to="/login" className='ms-3'>Log in</Link>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}