import React, {useState, useEffect} from 'react';
import DraftQueen from "../components/DraftQueen.jsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const QUEENS_ON_TEAM = 3;

const Draft = () => {
    const [queens, setQueens] = useState([]); 
    const [selected, setSelected] = useState({}); 
    const [name, setName] = useState(""); 

    console.log(name);

    const toggleQueenSelected = (id) => {
        if (selected[id]){ // queen is currently selected
            setSelected(prevSelected => {
                return {...prevSelected, [id]: false};
            });
        } else { // queen is not currently selected
            // only select queen if < QUEENS_ON_TEAM are already selected
            if (countSelected() < QUEENS_ON_TEAM) {
                setSelected(prevSelected => {
                    return {...prevSelected, [id]: true};
                });
            }
            
        }
    }

    const countSelected = () => {
        let total = 0;
        for (const [, value] of Object.entries(selected)) {
            if (value)  {
                total += 1;
            }
        }
        return total;
    }

    const validateAndSubmit = () => {
        // Check that user has name and queens
        if (countSelected() !== 3) {
            alert("Select 3 Queens!");
            return
        }
        if (name === ""){
            alert("Please Enter Your Name");
            return
        }

        // Create new user
        let userQueens = [];
        for (const [key, value] of Object.entries(selected)) {
            if (value){userQueens.push(key)}
        }
        let newUser = {
            name: name,
            queens: userQueens
        };
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }

    
    // Retrieve queens list on mount
    useEffect(() => {
        fetch('/api/queens', {
            method: 'GET'
        })
        .then(res => res.json()
            .then(queensList => {
                setQueens(queensList);
                let newSelected = {};
                queensList.forEach(queen => newSelected[queen.id] = false);
                setSelected(newSelected);
            })
        )
        .catch(err => console.log(err));
    }, [])


  return (
    <div>
        <TextField value={name} label="Your Name" variant="standard" onChange={e => setName(e.target.value)} />
        {queens.map(queen => {
            return (<DraftQueen 
                key={queen.id}
                queen={queen} 
                isSelected={selected[queen.id]} 
                toggleQueenSelected={toggleQueenSelected} 
            />)
        })}
        <Button variant="outlined" onClick={validateAndSubmit}>Submit</Button>
    </div>
  )
}

export default Draft