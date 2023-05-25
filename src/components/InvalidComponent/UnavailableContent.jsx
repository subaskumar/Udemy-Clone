import "./NoContent.css"
import noContentSvg from "../../assets/website static/No_Content_Image.svg"
import Button from '@mui/material/Button';


export default function UnavailableContent({head, paragraph}){

    return (
        <>
            <div className="no-content-block">
                <img src={noContentSvg} alt="" />
                <h5>{head}</h5>
                <p>{paragraph}</p>
                <Button variant="contained" disableElevation sx={{mt: 1}}>
                    Show Recommended Courses
                </Button>
            </div>
        </>
    )
}