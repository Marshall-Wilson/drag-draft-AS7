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
                <div style={{
                    width: '100%',
                    display: 'flex', 
                    justifyContent: 'space-between',
                }} >
                    <Avatar src={`/images/${queen.id}.webp`} variant="circle" sx={{ width: 65, height: 65, margin: 'auto 7px'}}/>
                    <p style={{fontSize: '14px'}}>{queen.name}</p>
                    <div>
                        <p style={{fontWeight: 'bold', fontSize: '20px', margin: '0 0 0 25px'}}>{String(queen.points).padStart(3, '0')}</p>
                        <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                        }}>
                        <div className='iconContainer'>
                            {[...Array(queen.stars)].map(i => <img key={i} src={'images/legend_star.webp'} alt='legendary legend star'/>)}
                        </div>
                        <div className='iconContainer'>
                            {[...Array(queen.plungers)].map(i => <img key={i} src={'images/plunger.png'} alt='plunger of blockage'/>)}
                        </div>
                    </div>
                </div>
                </div>
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
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {[...Array(queen.stars)].map(i => <img key={i} src={'images/legend_star.webp'} alt='legendary legend star' style={{width: '40px'}}/>)}
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '10px'
                    }}>
                        {[...Array(queen.plungers)].map(i => <img key={i} src={'images/plunger.png'} alt='plunger of blockage' style={{width: '40px'}}/>)}
                    </div>
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