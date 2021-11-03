import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]); //user array

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const res = await fetch("https://randomuser.me/api/?results=10"); //fetching 10 results from random user API
        const data = await res.json(); //used json datatype as mentioned in Random user API
        try {
            setUsers(data.results);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="userList">
            {users &&
                users.map(user => (
                    <ol key={user.login.uuid}>
                        <Link
                            to={{
                                pathname: `/${user.login.uuid}`,
                                state: { user },
                            }}
                        >
                           <p style = {{color:'white'}}>
                               <h3> {user.name.first} {user.name.last} </h3> 
                                </p>
                        </Link>
                    </ol>
                ))}
        </div>
    );
}