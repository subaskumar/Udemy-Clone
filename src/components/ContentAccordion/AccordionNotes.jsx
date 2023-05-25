import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { AiFillPlayCircle } from 'react-icons/ai';


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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function AccordionsContentNotes() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className='student-course-notes mt-2'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
            sx={{
                '& .MuiAccordionSummary-content': {justifyContent: 'space-between',},
              }}
        >
          <Typography>1. Course Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
                <div className='student-content-notes'>
                    <AiFillPlayCircle />
                    <span>Data type in Python (00:75)</span>
                </div>
                <div className='py-2'>
                    <p>It includes a comprehensive collection of prebuilt components that 
                        are ready for use in production right out of the box.
                    </p>
                </div>
                <div>
                    
                </div>
            </li>
            <li>
                <div className='student-content-notes'>
                    <AiFillPlayCircle />
                    <span>How to use lambda function (02:50)</span>
                </div>
                <div className='py-2'>
                    <p>It includes a comprehensive collection of prebuilt components that 
                        are ready for use in production right out of the box.
                    </p>
                </div>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
