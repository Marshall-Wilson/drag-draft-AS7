import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

const DraftQueen = ({queen, isSelected, toggleQueenSelected}) => {
  return (
    <ListItemButton 
      onClick={e => toggleQueenSelected(queen.id)}
      selected={isSelected}
      sx={{bgcolor: 'background.paper'}}
      style={{borderRadius: '5px', marginBottom: '13px', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}
    >
        <Avatar src={`/images/${queen.id}.webp`} sx={{ width: "48px", height: "48px", marginRight: "20px" }}/>
        <ListItemText>{queen.name}</ListItemText>
    </ListItemButton>
  )
}

export default DraftQueen