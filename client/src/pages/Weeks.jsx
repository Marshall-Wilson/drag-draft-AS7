import React, {useEffect, useState} from 'react'
import WeekModal from "../components/WeekModal.jsx";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Weeks = () => {
    const [weeks, setWeeks] = useState([]);

    // Retrieve weeks list on mount
    useEffect(() => {
        fetch('/api/weeks', {
            method: 'GET'
        })
        .then(res => res.json()
            .then(weeksList => setWeeks(weeksList))
        )
        .catch(err => console.log(err));
    }, [])

    return (
        <Container>
            <h2>Weeks</h2>
            <Stack>
                {weeks.sort((a, b)=> a.number > b.number).map((week) => {
                    return (
                        <WeekModal week={week} key={week.id}/>
                    )
                })}
            </Stack>
        </Container>
    )
}

export default Weeks