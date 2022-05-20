import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';

const DraftQueen = ({queen, isSelected, toggleQueenSelected}) => {
  return (
    <ListItemButton 
      onClick={e => toggleQueenSelected(queen.id)}
      selected={isSelected}
    >
        <Avatar src={`/images/${queen.id}.webp`} variant="rounded" sx={{ width: 48, height: 64 }}/>
        <ListItemText>{queen.name}</ListItemText>
    </ListItemButton>
  )
}

export default DraftQueen