import React, {useEffect, useState} from 'react'

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
        <div>
            <h2>Players</h2>
            {users.map((user) => {
                return (
                    <p> {user.name} </p>
                )
            })}
        </div>
    )
}

export default Players