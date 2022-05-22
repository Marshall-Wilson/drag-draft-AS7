import React, {useEffect, useState} from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const Rules = () => {
  const [types, setTypes] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/earnerTypes', {
        method: 'GET'
    })
    .then(res => res.json()
        .then(types => {
          setTypes(types)
          let newCategories = [];
          for (const idx in types) {
              if (!newCategories.includes(types[idx].category)) {
                  newCategories.push(types[idx].category);
              }
          }
          setCategories(newCategories);
        })
        
    )
    .catch(err => console.log(err));
  }, [])


  return (
    <Container>
        <h1 style={{fontWeight: 'bold', fontSize: '20px'}}>Rules</h1>
        <Stack>
          {categories.map(category => {
            return(
              <Box key={category}
                sx={{ border: '1px solid rgba(229, 229, 229, 1)', 
                      borderRadius: '10px',
                      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                      backgroundColor: 'white',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                      padding: '0 15px'
                    }}
              >
                <h2 style={{marginRight: 'auto', fontSize: '14px'}}>{category}</h2>
                {types.filter(type => type.category === category).map(type => {
                  return (
                    <Box key={type.id} style={{display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '10px'}}>
                      <p>{type.name}</p>
                      <p>{type.value}pt</p> 
                    </Box>
                  )
                })}
              </Box>
              )
          })}
            
        </Stack>
    </Container>
  )
}

export default Rules