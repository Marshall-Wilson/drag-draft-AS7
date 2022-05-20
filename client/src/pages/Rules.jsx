import React, {useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Rules = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('/api/earnerTypes', {
        method: 'GET'
    })
    .then(res => res.json()
        .then(types => setTypes(types))
    )
    .catch(err => console.log(err));
  }, [])


  return (
    <Container>
        <h1>Rules</h1>
        <Stack>
            {types.map(type => {
              return (
                <Box sx={{ p: 2, border: '1px solid grey', margin: '5px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3>{type.name}</h3>
                  <p>{type.description}</p>
                  <p>{type.value} points</p> 
                </Box>
              )
            })}
        </Stack>
    </Container>
  )
}

export default Rules