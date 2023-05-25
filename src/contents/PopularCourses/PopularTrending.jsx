import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {TrendingCourseCard} from '../../components'
import {dummy_courses} from "../../Variable/Variable"


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Here by using id we call category related Trending Products

export default function PopularTrendingCourses({selectCategory, cid, selectSubCategory, sid}){
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
        setValue(newValue);
    };


  return (
    <>
      <div className="container-fluid popular-crs-heading" style={{"padding": "45px 30px"}}>
        <h2 >{selectSubCategory ? selectSubCategory : selectCategory} Courses</h2>
        <h4 >Courses to get you started</h4>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider',mt:2}} >
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
              <Tab label="Most Popular" {...a11yProps(0)}  
                sx={{textTransform: "capitalize"}}/>
              <Tab label="New" {...a11yProps(1)} 
                sx={{textTransform: "capitalize",}}/>
              <Tab label="Trending" {...a11yProps(2)} 
                sx={{textTransform: "capitalize",}} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Tabs className="trending-tab-main"
              // value={value}
              // onChange={handleChange}
              // variant="scrollable"
              // scrollButtons={true}
              aria-label="scrollable auto tabs example"
            >
            {dummy_courses.map((course) => (
              <div key={course.id} className='inner-tab-card py-3' >
                <TrendingCourseCard
                  image={course.image} title={course.title}
                  description={course.description}
                  price={course.price} rating={course.rating}
                />
              </div>
            ))}
            </Tabs>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Tabs className="trending-tab-main"
              // value={value}
              // onChange={handleChange}
              // variant="scrollable"
              // scrollButtons={true}
              aria-label="scrollable auto tabs example"
            >
            {dummy_courses.map((course) => (
              <div key={course.id} className='inner-tab-card py-3' index={1}>
                <TrendingCourseCard
                  image={course.image} title={course.title}
                  description={course.description}
                  price={course.price} rating={course.rating}
                />
              </div>
            ))}
            </Tabs>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Tabs className="trending-tab-main"
              // value={value}
              // onChange={handleChange}
              // variant="scrollable"
              // scrollButtons={true}
              aria-label="scrollable auto tabs example"
            >
              {dummy_courses.map((course) => (
                <div key={course.id} className='inner-tab-card py-3'>
                  <TrendingCourseCard 
                    image={course.image} title={course.title}
                    description={course.description}
                    price={course.price} rating={course.rating}
                  />
                </div>
              ))}
            </Tabs>
          </TabPanel>
        </Box>
      </div>
    </>
)
}