import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

const TeamModal = ({week}) => {
    const [open, setOpen] = useState(false);
    const [weekEarners, setWeekEarners] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Retrieve queens list on mount
    useEffect(() => {
        const fetchAll = async () => {
            const earnerTypesJson = await fetch(`/api/weeks/${week.id}/earners`, {
                method: 'GET'
            });
            const earners = await earnerTypesJson.json();

            setWeekEarners(earners);

            let newCategories = [];
            for (const idx in earners) {
                if (!newCategories.includes(earners[idx].earnerCategory)) {
                    newCategories.push(earners[idx].earnerCategory);
                }
            }
            setCategories(newCategories);
        }
        fetchAll();
    }, [week])


    return (
        <Container maxWidth="xs"
            sx={{ border: '1px solid rgba(229, 229, 229, 1)', 
                borderRadius: '10px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                backgroundColor: 'white',
                marginBottom: '15px'
            }}
        >
          <Button onClick={handleOpen}>
                <p>week {week.number}</p>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ 
                      border: '1px solid rgba(229, 229, 229, 1)', 
                      borderRadius: '10px',
                      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                      backgroundColor: 'white',
                      width: '90%',
                      margin: '50px auto',
                      paddingBottom: '20px'
                    }}
                >
                    <h3 style={{margin: '40px auto 10px auto', textAlign: 'center'}}>Week {week.number} Results</h3>
                    {categories.map(category => {
                        return (
                            <Box key={category} style={{width: '90%', margin: '0 auto'}}>
                                <h4 style={{marginBottom: '5px'}}>{category}</h4>
                                <hr style={{border: '1px solid rgba(87, 154, 216, 0.23)'}}/>
                                {weekEarners.filter(earner => earner.earnerCategory === category).map(earner => {
                                    return (
                                        <Box key={earner.id}
                                            style={{
                                                display: 'flex', 
                                                alignItems: 'center',
                                                fontSize: '10px',
                                            }}
                                        >
                                            <Avatar src={`/images/${earner.queenId}.webp`} sx={{ width: "28px", height: "28px", marginRight: "20px" }}/>
                                            <p style={{fontWeight: 'bold', marginRight: '5px'}}>{earner.queenName}</p>
                                            <p style={{marginRight: 'auto'}}>{earner.earnerName}</p>
                                            <p>{earner.points}pt</p>
                                        </Box>
                                    )
                                })}
                            </Box>
                        )
                    })}
                </Box>
            </Modal>
        </Container>
    )
}

export default TeamModal