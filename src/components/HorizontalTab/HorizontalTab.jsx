import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./HorizontalTab.css"
import {VerticalTabs} from "../index"

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
        <Box sx={{padding: "25px 150px" }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{borderBottom: 1, borderColor: 'divider', padding: "0px 150px"}} >
        <Tabs value={value} onChange={handleChange} sx={{minHeight: "43px"}}
            // aria-label="basic tabs example"  
            className='tab-header'>
          <Tab label="My Library" {...a11yProps(0)} />
          <Tab label="My Goals" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <VerticalTabs />
      </TabPanel>
      <TabPanel value={value} index={1} >
        Item Two
      </TabPanel>
    </Box>
  );
}