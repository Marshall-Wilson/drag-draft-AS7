import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {ModalStyle, QueenButtonStyle, QueenImageStyle} from '../styles/ModalStyle';

const TeamModal = ({queen}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth="xs">
            <Button style={QueenButtonStyle} onClick={handleOpen} className={queen.eliminated ? "eliminated" : null}>
                <Avatar src={`/images/${queen.id}.webp`} variant="rounded" sx={{ width: 48, height: 64 }}/>
                <p>{queen.name}</p>
                <p><span style={{fontSize: '20px'}}>{queen.points} </span>points</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box style={ModalStyle}>
                    <img src={`/images/${queen.id}.jpg`} alt={queen.name} style={QueenImageStyle}/>
                    <h2>{queen.name}</h2>
                    <p style={{textAlign: 'center'}}>"{queen.description}"</p>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <p style={{marginBottom:0}}>Original Season(s):</p>
                        <p style={{marginTop:0}}>{queen.seasons}</p>
                    </div>
                    <p>Points: {queen.points}</p>
                </Box>
            </Modal>      
        </Container>    
    )
}

export default TeamModal