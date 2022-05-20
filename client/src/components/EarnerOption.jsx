import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const EarnerOption = ({type, queens, typeValues, changeValue}) => {
    return (
    <Accordion key={type.id}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
            <h3>{type.name}</h3>
        </AccordionSummary>
        <AccordionDetails>
            {queens.map(queen => {
                return(
                    <Box className='earner-queen' key={queen.id}>
                        <p>{queen.name}</p>
                        <TextField 
                            type="number"
                            value={typeValues[queen.id].count}
                            onChange={e => changeValue(type.id, queen.id, e.target.value)}
                        />
                    </Box>
                )
            })}
        </AccordionDetails>
    </Accordion>
  )
}

export default EarnerOption