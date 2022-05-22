import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import {NavStyle} from '../styles/NavStyle';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (open) => 
        (event) => {
            if (
                event.type === 'keydown' &&
                (event.key === 'Tab' || event.key === 'Shift')
            ){ return; }
        setIsOpen(open);
    }

    const list = () => (
        <Box
          style={NavStyle}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton sx={{color: "white"}} onClick={toggleDrawer(false)} style={{position: "absolute", right: "15px", top: "15px"}}>
            <CloseIcon sx={{fontSize: 40}}/>
          </IconButton>
          <List 
            style={{
              display: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {['Queens', 'Players', 'Weeks', 'Rules', 'Draft'].map((text, index) => (
              <Link to={`/${text}`}>
                <ListItem button key={text}>
                    <ListItemText primary={text} disableTypography='true' sx={{
                        fontSize: 30,
                        fontWeight: '700',
                        color: 'white',
                        textAlign: 'center',
                        height: 50
                      }}
                    />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      );

  return (
    <Container maxWidth="xs" style={{position: "relative"}}>
      <Link to={"/"} style={{width: "129px"}}>
          <img src={"images/as7Logo.png"} alt="AS7 Logo"/>
      </Link>
      <IconButton onClick={toggleDrawer(true)} style={{position: "absolute", right: "15px", top: "15px"}}>
        <MenuIcon fontSize="large"/>
      </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </SwipeableDrawer>
    </Container>
  )
}

export default Nav;