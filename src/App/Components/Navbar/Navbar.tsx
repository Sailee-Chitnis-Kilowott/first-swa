import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Navbar.css';

export default function Navbar() {
    return (
  <div className="navMenu">
      <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
              <div className="navMenu-content">
              <Typography variant="h6" noWrap component="div">
           Kilowott System 
            </Typography>
            &nbsp;
            &nbsp;
            <Typography variant="h6" noWrap component="div">
          Administration
            </Typography>
              </div>
          
          </Toolbar>
        </AppBar>

  </div>
        

);
}