import React, {useEffect, useState} from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EarnerOption from '../components/EarnerOption.jsx';
import Button from '@mui/material/Button';


const AdminForm = ({queens, types, categories}) => {
    const [weekNumber, setWeekNumber] = useState('');
    const [weekInfo, setWeekInfo] = useState('');
    const [earnerValues, setEarnerValues] = useState({});

    // {[typeId]: {
    //      [queenId]: {
    //              count: 0
    //          }            
    //      }   
    // }
    useEffect(() => {
        let newEarnerValues = {};
        for (let i in types) {
            let typeValues = {}
            for (let j in queens) {
                typeValues[queens[j].id] = {"count": 0};
            }
            newEarnerValues[types[i].id] = typeValues;
        }
        setEarnerValues(newEarnerValues);
    }, [queens, types])

    const resetEarnerValues = () => {
        let newEarnerValues = {};
        for (let i in types) {
            let typeValues = {}
            for (let j in queens) {
                typeValues[queens[j].id] = {"count": 0};
            }
            newEarnerValues[types[i].id] = typeValues;
        }
        setEarnerValues(newEarnerValues);
    }

    const changeValue = (typeId, queenId, value) => {
        let newTypeValues = earnerValues[typeId];
        newTypeValues[queenId] = value;
        setEarnerValues(oldValues => {
            return {...oldValues, [typeId]: newTypeValues}
        })
    }

    const changeNumber = (value) => {
        setWeekNumber(Math.max(value, 1));
    }

    const validateAndSubmit = async () => {
        if (weekNumber === "" || weekInfo === "") {
            alert("Don't forget a week number and description");
            return
        }
        const weekJson = await fetch('/api/weeks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({number: weekNumber, info: weekInfo})
        })
        const week = await weekJson.json();

        for (const typeId in earnerValues) {
            let typeEarners = earnerValues[typeId];
            for (const queenId in typeEarners) {
                let queenTypeEarners = typeEarners[queenId];
                for (let i = 0; i < queenTypeEarners; i++) {
                    await fetch('/api/earners', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            earnerType: typeId,
                            queen: queenId,
                            week: week.id
                        })
                    })
                }
            }
        }
        await fetch('/api/queens/update', {
            method: 'PUT'
        });
        await fetch('/api/users/update', {
            method: 'PUT'
        });
        setWeekNumber('');
        setWeekInfo('');
        resetEarnerValues();
        alert('Success!');
    }

  return (
    <Container>
        <TextField 
            type="number"
            label="week number"
            value={weekNumber}
            onChange={e => changeNumber(e.target.value)}
        />
        <TextField
            label="week description"
            multiline
            value={weekInfo}
            onChange={e => setWeekInfo(e.target.value)}
        />
        {categories.sort().map(category => {
            return (
                <Accordion key={category}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        <h3>{category}</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack>
                            {types.filter(type => type.category === category)
                                .map(type => {
                                    if (earnerValues[type.id]){return(
                                        <EarnerOption 
                                            key={type.id} 
                                            type={type} 
                                            queens={queens}
                                            typeValues={earnerValues[type.id]}
                                            changeValue={changeValue}
                                        />
                                    )} else {
                                        return null
                                    }
                                })}
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            )
        })}
        <Button onClick={validateAndSubmit} variant="outlined">
            Submit
        </Button>
    </Container>
  )
}

export default AdminForm