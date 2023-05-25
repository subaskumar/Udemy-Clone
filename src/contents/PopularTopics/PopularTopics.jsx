import {dummy_topics} from "../../Variable/Variable"
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '1px solid #d1d7dc',
    borderRadius: "0px",
    boxShadow: "none",
    color: "#000",
    cursor: "pointer"
    // color: theme.palette.text.secondary,
  }));

export default function PopularTopic(){

    return (
        <>
        <div className="container-fluid " style={{"padding": "10px 30px"}}>
            <div className="mb-4 popular_course">
                <h3 >Popular Topics</h3>
            </div>
            <div>
                <Grid container spacing={1}>

                {/* <div className="row gx-1"> */}
                    {dummy_topics.map((topic)=>(
                        <Grid xs={6} sm={4} md={2.4}>
                            {/* {topic} */}
                            <Item>{topic}</Item>
                        </Grid>
                        // <div className="col-lg-3 col-sm-6 col-md-4 border px-2 py-3 text-center">

                        //     {topic}
                        // </div>
                    ))
                    }
                </Grid>
                {/* </div> */}
                {/* <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={8}>
                        <Item>xs=8</Item>
                        </Grid>
                        <Grid xs={4}>
                        <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={4}>
                        <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={8}>
                        <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Box> */}

            </div>

        </div>
        </>
    )
}