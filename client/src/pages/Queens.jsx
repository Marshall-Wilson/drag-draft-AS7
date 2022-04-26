import React, {useEffect, useState} from 'react'

const Queens = () => {
    const [queens, setQueens] = useState([]);

    // Retrieve queens list on mount
    useEffect(() => {
        fetch('/api/queens', {
            method: 'GET'
        })
        .then(res => res.json()
            .then(queensList => setQueens(queensList))
        )
        .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <h2>Queens</h2>
            {queens.map((queen) => {
                return (
                    <p> {queen.name} </p>
                )
            })}
        </div>
    )
}

export default Queens