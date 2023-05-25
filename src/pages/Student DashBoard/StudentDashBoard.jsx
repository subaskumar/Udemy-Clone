import {BasicTabs} from "../../components"
import {Avatar} from '@mui/material';
import { AiOutlineEdit, AiFillEdit } from 'react-icons/ai';

const StudentDashBoard = () =>{

    return (
        <>
            <div>
                <div style={{marginTop: "70px"}}>
                    <div style={{padding: "0px 150px"}}>
                        <div className="d-flex" style={{padding: "30px 0px", alignItems: "center"}}>
                            <Avatar
                                className='instructor-avatar'
                                alt="Remy Sharp"
                                src="https://rainbowit.net/html/histudy/assets/images/client/avatar-02.png"
                                sx={{ 
                                    width: 85, height: 85,
                                }}
                            />
                            <div className="my-learn-profile px-3">
                                <h3>Welcome back, subas kumar!</h3>
                                <small>Junior Software Developer 
                                    <AiFillEdit style={{fontSize: "18px", marginLeft: "10px", cursor: "pointer"}}/>
                                </small>
                            </div>
                        </div>
                    </div>
                    <BasicTabs />
                </div>
            </div>
        </>
    )
}

export default StudentDashBoard