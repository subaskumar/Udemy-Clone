import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import {ControlledAccordions} from "../../components";
import {TabsPageExample} from "../../contents"
import ReactPlayer from 'react-player'
import "./Dashboard.css"
import { BsXCircle } from 'react-icons/bs';
import { AiOutlineMenuUnfold } from 'react-icons/ai';


const drawerWidth = 350;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function MyCourseViewSection() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}
        sx={{bgcolor: "transparent", boxShadow: "none", marginTop: "70px", border: "1px solid rgba(255,255,255,.35)"}}
        >
          <Toolbar>
            <IconButton
                color="inherit"  aria-label="open drawer"
                onClick={handleDrawerOpen} edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
                <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap component="div">
                Persistent drawer
            </Typography> */}
          </Toolbar>
      </AppBar>
      <Drawer
        className='course-view-content'
        sx={{ width: drawerWidth, flexShrink: 0,
          '& .MuiDrawer-paper': {
              width: drawerWidth, boxSizing: 'border-box',marginTop: "70px",
              },
          }}
          PaperProps={{
              sx: {
                backgroundColor: "#3a3a3a",
                color: "#fff"
              }
            }}
          variant="persistent" anchor="left" open={open}
      >
          <DrawerHeader sx={{justifyContent: "space-between"}}>
              <div className='d-flex align-items-center mx-3'>
                <AiOutlineMenuUnfold style={{fontSize: '23px', marginRight: "7px"}}/>
                <span style={{fontSize: "18px"}}>Contents</span>
              </div>
              <IconButton onClick={handleDrawerClose} sx={{color: "#fff"}}>
                  <BsXCircle style={{fontSize: '30px'}}/>
              </IconButton>
          </DrawerHeader>
          <Divider />
          <ControlledAccordions />
      </Drawer>
      <Main open={open} sx={{width:'100%', mb:5}}>
        <DrawerHeader />
            <ReactPlayer playing={false} controls 
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              config={{
                vimeo: {
                  playerVars: { showinfo: 0 }
                },
              }}
              width="100%"
        />
        <div style={{padding: "25px 10px"}}>
          <TabsPageExample />

        </div>
      </Main>
    </Box>
  );
}