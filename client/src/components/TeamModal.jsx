import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container'


const TeamModal = ({player}) => {
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
        <Container maxWidth="xs">
            <Button onClick={handleOpen}>
                <p>{player.name}</p>
                <p>{player.points}</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box >
                    {playerQueens.map(queen => {
                        return (
                            <p key={queen.id}>{queen.name} {queen.points}</p>
                        )
                    })}
                </Box>
            </Modal>
        </Container>
    )
}

export default TeamModal