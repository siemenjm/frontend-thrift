import React, { useState, useEffect } from 'react';

export default function UserList() {
    const [users, setUsers] = useState(null);

    async function getUsers() {
        try {
            const response = await fetch('http://localhost:4000/users');
            const data = await response.json();

            setUsers(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    function loaded() {
        const allUsers = users.map((user) => {
            return (
                <div className="user" key={user.user_id}>
                    <h2>{user.email}</h2>
                </div>
            );
        });

        return allUsers;
    }

    return (
        <div className="user-list">
            {users ? loaded() : <h2>Loading User list...</h2>}
        </div>
    );
}
