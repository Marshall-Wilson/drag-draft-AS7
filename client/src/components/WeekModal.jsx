import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container'


const TeamModal = ({week}) => {
    const [open, setOpen] = useState(false);
    const [weekEarners, setWeekEarners] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Retrieve queens list on mount
    useEffect(() => {
        fetch(`/api/weeks/${week.id}/earners`, {
            method: 'GET'
        })
        .then(res => res.json()
            .then(earnersList => {
                setWeekEarners(earnersList);
            })
        )
        .catch(err => console.log(err));
    }, [week])


    return (
        <Container maxWidth="xs">
          <Button onClick={handleOpen}>
                <p>{week.number}: {week.info}</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box>
                    <p>{week.number}</p>
                    <p>{week.info}</p>
                    {weekEarners.map(earner => {
                        return (
                            <Box key={earner.id}>
                                <p>{earner.earnerName}</p>
                                <p>{earner.earnerDescription}</p>
                                <p>Earned by: {earner.queenName}</p>
                                <p>{earner.points} points</p>
                            </Box>
                        )
                    })}
                </Box>
            </Modal>
        </Container>
    )
}

export default TeamModal