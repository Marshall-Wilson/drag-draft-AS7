import React, {useEffect, useState} from 'react'

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
        <div>
            <h2>Weeks</h2>
            {weeks.map((week) => {
                return (
                    <p> {week.number}: {week.info}</p>
                )
            })}
        </div>
    )
}

export default Weeks