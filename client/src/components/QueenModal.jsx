import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {ModalStyle, QueenButtonStyle, QueenImageStyle} from '../styles/ModalStyle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const TeamModal = ({queen}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container style={{width: '100%', padding: '0 10px'}}>
            <Button style={QueenButtonStyle} onClick={handleOpen} className={queen.eliminated ? "eliminated" : null}>
                <Avatar src={`/images/${queen.id}.webp`} variant="circle" sx={{ width: 38, height: 38 }}/>
                <p style={{fontSize: '14px'}}>{queen.name}</p>
                <p style={{fontWeight: 'bold', fontSize: '20px', margin: '0'}}>{String(queen.points).padStart(3, '0')}</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box style={ModalStyle}>
                    <IconButton sx={{color: "rgba(229, 229, 229, 1)"}} onClick={handleClose} style={{position: "absolute", right: "9px", top: "9px"}}>
                        <CloseIcon sx={{fontSize: 25}}/>
                    </IconButton>
                    <img src={`/images/${queen.id}.jpg`} alt={queen.name} style={QueenImageStyle}/>
                    <h2 style={{marginBottom: '0px'}}>{queen.name}</h2>
                    <p style={{color: 'rgba(87, 154, 216, 0.5)'}}>{queen.seasons}</p>
                    <p style={{textAlign: 'center', fontStyle: 'italic', marginTop: '0px'}}>"{queen.description}"</p>
                    <p style={{
                        textAlign: 'center', 
                        backgroundColor: '#579AD8', 
                        color: 'white',
                        borderRadius: '5px',
                        padding: '10px 20px'
                        }}>
                            Points {String(queen.points).padStart(3, '0')}
                    </p>
                </Box>
            </Modal>      
        </Container>    
    )
}

export default TeamModal