import * as React from 'react';
import{ Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip  }from '@mui/material/';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsOffIcon from '@mui/icons-material/NotificationsOff';
import { useDispatch, useSelector } from "react-redux";
import {logOut} from "../../features/LogIn/loginSlice"
import { authApis } from "../../service/authApis"

export default function AccountMenu() {
  const { user } = useSelector(state => state.login);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogMeOut = () =>{
    dispatch(logOut())
    dispatch(authApis.util.resetApiState());

  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small" sx={{ ml: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
          >
            <Avatar sx={{ width: 32, height: 32 }} 
              src={`${ process.env.REACT_APP_IMG_BASE_URL + user?.profile?.photo}`}
              >
               { user?.profile?.first_name?.charAt(0)?.toUpperCase() }
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose} onClick={handleClose}
        disableScrollLock={true}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',  mt: 2,
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            '& .MuiAvatar-root': {
              ml: -0.5, mr: 1,
            },
            '&:before': {
              content: '""', display: 'block',  position: 'absolute',
              top: 0, right: 14, width: 10, height: 10, zIndex: 0,
              bgcolor: 'background.paper', transform: 'translateY(-50%) rotate(45deg)',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar 
            sx={{ width: 55, height: 55 }}
            src={`${ process.env.REACT_APP_IMG_BASE_URL + user?.profile?.photo}`}
          >
              { user?.profile?.first_name?.charAt(0)?.toUpperCase()?? '' + user?.profile?.last_name?.charAt(0)?.toUpperCase()?? '' } 
          </Avatar>
          <div className='account-avatar'>
            <div>
                <span>{user?.profile?.first_name + " " + user?.profile?.last_name}</span>
            </div>
            <div>
                <small>{user?.email}</small>
            </div>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem sx={{ my: 1, fontSize: "15px" }}>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem sx={{ my: 1, fontSize: "15px" }}>
          <ListItemIcon>
            <NotificationsOffIcon fontSize="small" />
          </ListItemIcon>
          Notifications
        </MenuItem>
        <MenuItem sx={{ my: 1, fontSize: "15px" }}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
            Account Settings
        </MenuItem>
        <MenuItem 
          sx={{ my: 1, fontSize: "15px" }} 
          onClick={LogMeOut}
          >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
