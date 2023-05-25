import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import "./Accordion.css"
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));


const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
  }));

  
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{backgroundColor: "#3a3a3a"}} className='course-watch-main-section'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography 
            sx={{  width: '95%', flexShrink: 1, 
              letterSpacing: "0.5px", fontSize: '0.85rem'
              }}
          >
            Introduction
          </Typography>
       </AccordionSummary>
        <AccordionDetails sx={{padding: "8px 16px 0px"}} className='course-subContent-view'>
          <ul>
            <li>
              <div className='views-button'></div>
              <div>
                <div>Beginning your data analysis journey</div>
                <div> <small>7m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
            <li>
              <div className='views-button'></div>
              <div>
                <div> What should you know</div>
                <div> <small>4m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
            <li>
            <div className='views-button'></div>
              <div>
                <div>Using the excersises files</div>
                <div> <small>5m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
      >
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography 
            sx={{  width: '95%', flexShrink: 1, 
              letterSpacing: "0.5px", fontSize: '0.87rem'
              }}
          >
            1. Getting Started with Data Analysis
          </Typography>
       </AccordionSummary>
        <AccordionDetails sx={{padding: "8px 16px 0px"}}  className='course-subContent-view'>
          <ul>
            <li>
              <div className='views-button'></div>
              <div>
                <div> Defining Data Analysis and Data Analyst</div>
                <div> <small>2m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
            <li>
              <div className='views-button'></div>
              <div>
                <div> Organizational roles in Data</div>
                <div> <small>4m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
            <li>
              <div className='views-button'></div>
              <div>
                <div>Understanding Types of Data job roles</div>
                <div> <small>5m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
            <li>
              <div className='views-button'></div>
              <div>
                <div>Discovering if your are an data analyst</div>
                <div> <small>5m 2s</small></div>
              </div>
              <TurnedInNotIcon className='bookmark-btn'/>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
        <AccordionSummary
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography 
            sx={{  width: '95%', flexShrink: 1, 
              letterSpacing: "0.5px", fontSize: '0.84rem'
              }}
          >            
            2. Fundamentals of Data Understanding
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding: "8px 16px 0px"}} className='course-subContent-view'>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}