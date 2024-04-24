import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);

    const handleDelete = (_id) => {
        console.log('btn clicked', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = users.filter(user => user._id !== _id);
                    setUser(remaining);
                    alert("deleted successfuly");
                }
            })
    }
    return (
        <div>
            <h1>Users : {users.length}</h1>
            <div>
                {users.map(user => <li key={user._id}>

                    {user._id} : {user.name}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </li>)}

            </div>
        </div>
    );
};

export default Users;