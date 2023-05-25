import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {UnavailableContent} from "../../components"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 2, bgcolor: 'background.paper', display: 'flex' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className='vertical-tab-header'
        sx={{ borderRight: 1, borderColor: 'divider', padding: "0px 80px 0px 0px" }}
      >
        <Tab label="In Progress" {...a11yProps(0)} />
        <Tab label="Saved" {...a11yProps(1)} />
        <Tab label="My Collections" {...a11yProps(2)} />
        <Tab label="Learning History" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} className="my-library__content-block">
        <UnavailableContent 
          head="You don’t have any courses in progress."
          paragraph="When you start a course you can find it here. Start watching videos that interest you."
        />
      </TabPanel>
      <TabPanel value={value} index={1} className="my-library__content-block">
        <UnavailableContent 
          head=" You don’t have any saved courses or videos."
          paragraph="When you save a course, you can find it here."
        />
      </TabPanel>
      <TabPanel value={value} index={2} className="my-library__content-block">
        <UnavailableContent 
          head="You don’t have any collections."
          paragraph="When you create a collection you can find it here."
        />
      </TabPanel>
      <TabPanel value={value} index={3} className="my-library__content-block">
        <UnavailableContent 
          head="You don’t have any completed courses - yet."
          paragraph="When you complete a course, you can find it here"
        />
      </TabPanel>
    </Box>
  );
}