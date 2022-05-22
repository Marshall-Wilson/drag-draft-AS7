import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import {ModalStyle} from '../styles/ModalStyle.jsx';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';


const TeamModal = ({player, icon}) => {
    const [open, setOpen] = useState(false);
    const [playerQueens, setPlayerQueens] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Retrieve queens list on mount
    useEffect(() => {
        fetch(`/api/users/${player.id}/queens`, {
            method: 'GET'
        })
        .then(res => res.json()
            .then(queensList => {
                setPlayerQueens(queensList)
            })
        )
        .catch(err => console.log(err));
    }, [player])


    return (
        <Container sx={{padding: 0}}>
            <Button onClick={handleOpen} 
                style={{
                    width: '100%',
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border: '1px solid rgba(229, 229, 229, 1)', 
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    backgroundColor: 'white',
                    marginBottom: '12px'
                }}
            >
                <p style={{fontWeight: 'bold', fontSize: '24px', margin: '0px 10px 0 0'}}>{String(player.points).padStart(3, '0')}</p>
                <p style={{margin: '5px auto 5px 0'}}>{player.name}</p>
                {icon}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box style={ModalStyle}>
                    <IconButton sx={{color: "rgba(229, 229, 229, 1)"}} onClick={handleClose} style={{position: "absolute", right: "9px", top: "9px"}}>
                        <CloseIcon sx={{fontSize: 25}}/>
                    </IconButton>
                    <h3>{player.name}'s Bracket</h3>
                    {playerQueens.map(queen => {
                        return (
                            <Box style={{
                                width: '100%',
                                display: 'flex', 
                                alignItems: 'center',
                                fontSize: '14px',
                            }}>
                                <Avatar src={`/images/${queen.id}.webp`} sx={{ width: "28px", height: "28px", marginRight: "20px" }}/>
                                <p key={queen.id} style={{fontWeight: 'bold', marginRight: 'auto'}}>{queen.name}</p>
                                <p>{String(queen.points).padStart(3, '0')}pt</p>
                            </Box>
                        )
                    })}
                </Box>
            </Modal>
        </Container>
    )
}

export default TeamModal