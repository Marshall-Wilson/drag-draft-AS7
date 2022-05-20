import React, {useEffect, useState} from 'react';
import TeamModal from "../components/TeamModal.jsx";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

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
                {users.map((user) => {
                    return (
                        <TeamModal player={user} key={user.id}/>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default Players