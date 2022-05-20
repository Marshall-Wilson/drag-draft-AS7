import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container'
import {NavStyle} from '../styles/NavStyle'

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
          <List>
            {['Queens', 'Players', 'Weeks', 'Rules', 'Draft'].map((text, index) => (
              <ListItem button key={text}>
                <Link to={`/${text}`}>
                    <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      );

  return (
    <Container maxWidth="xs">
      <Link to={"/"}>
          <h1>Drag Draft All Stars 7</h1>
      </Link>
      <Button onClick={toggleDrawer(true)}>Nav</Button>
        <Drawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
    </Container>
  )
}

export default Nav;