import * as React from 'react';
import { Link, useLocation} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {AppBar, Box, Divider, Drawer, IconButton,List, ListItem, 
        ListItemButton,ListItemText, Toolbar,Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState, useLayoutEffect} from 'react';
import {useSelector} from 'react-redux'
import {navItems} from "../../Variable/Variable"
import CourseDropdown from "../Dropdown/Dropdown"
import AccountMenu from "./ImageDropdown"
import "./NavBar2.css"
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';


const drawerWidth = 240;
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1200,
      xl: 1536,
    },
  },
});


function DrawerAppBar(props) {
  const { isAuthenticated } = useSelector(state => state.login);
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollPosition, setPosition] = useState(0)
  const [top, setTop] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const location = useLocation();
  
  useLayoutEffect(() => {
      if(location.pathname !== '/'){
        setTop(false)
      }
      window.addEventListener("scroll", handelScroll);
      if(scrollPosition === 0 & location.pathname === '/'){
        setTop(true)
      }
      else{
        setTop(false)
      }
      return () => {
        window.removeEventListener("scroll", handelScroll)
      };

  }, [scrollPosition, location.pathname]);

  const handelScroll = () => {
    setPosition(window.pageYOffset)
  }
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const dropDownShow = () =>{
    setDropdown(true)
  }
  const dropDownHide = (event) =>{
    setDropdown(false)
    // event.target.querySelector("ul").classList.remove('active-subContent');
  }

  const container = windows !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }} theme={theme}>
        <AppBar component="nav" sx={{bgcolor: "transparent",boxShadow: "none"}} className="top-bar">
          <Toolbar className={`top-bar-content ${top ? "expand-nav": ""}`}>
            <IconButton theme={theme}
              aria-label="open drawer" 
              edge="start" onClick={handleDrawerToggle}
              sx={{mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography theme={theme}
              variant="h6" component="div"
              sx={{flexGrow: 1, display: { xs: 'flex', md: 'block' }, justifyContent: 'center', fontFamily: "italic"}}
              // sx={{flexGrow: 1, display: 'flex', justifyContent: 'center', alignContent: "center", fontFamily: "italic"}}

            >
              <Link to="/" className='logo-link'>
                <span className='brand-start'>U</span> <small className='sub-title'>dacity</small>
              </Link>
            </Typography>
              <List theme={theme} sx={{ display: { xs: 'none', md: 'flex', height: "100%", 
                  justifyContent: "center", alignItems:"center", padding: "0px" } }} className="nav-link-list">
                {navItems.map((item) => (
                  item.is_dropdown ? 
                    <React.Fragment key={item.id}>
                      <ListItem onMouseEnter={dropDownShow} onMouseLeave={(event) => {dropDownHide(event);}}
                        className="dropdown-link" sx={{display: "inline-block"}}
                        >
                        <Link to={item.link} className="" >{item.title}</Link>
                        <CourseDropdown isOpen={dropdown} />
                      </ListItem>
                    </React.Fragment> 
                    : 
                    <React.Fragment key={item.id}>
                      <ListItem key={item.id} className="dropdown-link">
                            <Link to={item.link} className="" >{item.title}</Link>
                      </ListItem>
                    </React.Fragment>
                ))}
              </List>
              <div className="d-flex justify-content-center" id="mynavbar">
                <Link to="/" className="nav-item px-3 fs-4"><AiOutlineSearch className='mt-1'/></Link>
                <Link to="/" className="nav-item ps-2 ps-sm-3 pe-sm-4" style={{"fontSize": "22px"}}>
                <Badge badgeContent={5} color="secondary">
                  <AiOutlineShoppingCart className='fw-bold'/>              
                </Badge> 
                </Link>
              </div>
              <div className='d-none d-sm-block ps-2'>
                {isAuthenticated?
                    // <AccountMenu />
                    <><AccountMenu /></>
                    :
                    <Link to="/login" className="nav-auth" style={{"color": "#fff"}}>Log In</Link>
                }
              </div>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container} variant="temporary"
            open={mobileOpen} onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{ display: { sm: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;
