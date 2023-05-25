import * as React from 'react';
import { Box, Tabs, TabList, Typography, Input, 
  Tab, tabClasses } from '@mui/joy';
import Button from '@mui/material/Button';
import TabPanel from '@mui/joy/TabPanel';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { RiSendPlaneFill } from 'react-icons/ri';
import { AiTwotoneBook } from 'react-icons/ai';
import ListAltIcon from '@mui/icons-material/ListAlt';
import {TextareaValidator, AccordionsContentNotes} from "../../components"

export default function TabsPageExample() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box
      sx={{
        bgcolor: 'background.body', flexGrow: 1,
        m: -3, overflowX: 'hidden',  borderRadius: 'md',
      }}
    >
      <Tabs
        aria-label="Pipeline" value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{ '--Tabs-gap': '0px' }}
      >
        <TabList
          variant="plain"
          sx={{
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
            pt: 2,
            alignSelf: 'flex-start',
            [`& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              color: '#424242',
              '&:hover': {
                bgcolor: 'transparent',
                color: '#212121',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.500',
                fontWeight: 'lg',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '-1px',
                  left: 'var(--List-item-paddingLeft)',
                  right: 'var(--List-item-paddingRight)',
                  height: '3px',
                 
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
          className='content-view-tab'
        >
          <Tab> <ListAltIcon /> Overview </Tab>
          <Tab><RiSendPlaneFill /> Q&A </Tab>
          <Tab><AiTwotoneBook />Notebook</Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level3,
            height: '1px',
            background: '#bdbdbd',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        />
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            px: 4,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              Deals panel
            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            <Input
                autoFocus
                placeholder="Type in third panel..."
                startDecorator={<SearchRounded />}
            />
          </TabPanel>
          <TabPanel value={2}>
            <div className='student-own-notes'>
              <TextareaValidator submitTitle="Save"/>
              <div className='py-2'>
                <small>1 Note taken</small>
              </div>
              <div>
                <AccordionsContentNotes />
              </div>
              <div className='py-5'>
                <h5>Export your notes</h5>
                <small>Get your notes for this course which includes description,
                  chapters, and timestamps
                </small>
                <br/>
                <Button variant="outlined" sx={{mt: "10px"}}>Download</Button>
              </div>
            </div>
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}
