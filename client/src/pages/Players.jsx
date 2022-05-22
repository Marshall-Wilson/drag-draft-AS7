import React, {useEffect, useState} from 'react';
import TeamModal from "../components/TeamModal.jsx";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Players = () => {
    const [users, setUsers] = useState([]);

    // Retrieve users list on mount
    useEffect(() => {
        fetch('/api/users', {
            method: 'GET'
        })
        .then(res => res.json()
            .then(usersList => setUsers(usersList))
        )
        .catch(err => console.log(err));
    }, [])

    return (
        <Container>
            <h2>Players</h2>
            <Stack>
                {users.sort((a, b) => a.points < b.points).map((user, idx) => {
                    return (
                        <TeamModal player={user} key={user.id} icon={idx === 0 ? <EmojiEventsIcon sx={{fontSize: 40, color: 'gold'}}/>: null}/>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default Players