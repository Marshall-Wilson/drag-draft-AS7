import React from 'react'
import { Link } from "react-router-dom"
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import {NavLinkStyle} from '../styles/NavStyle'

const Home = () => {
  return (
    <Container maxWidth="xs">
      <List>
          {['Queens', 'Players', 'Weeks', 'Rules', 'Draft'].map((text, index) => (
            <Link to={`/${text}`}>
              <ListItem button key={text} style={NavLinkStyle}>
                  <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
    </Container>
  )
}

export default Home