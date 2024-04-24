import { useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();


    const handleDelete = (_id) => {
        console.log('btn clicked', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
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
                    <button onClick={() => handleDelete(user._id)}>X</button>
                </li>)}

            </div>
        </div>
    );
};

export default Users;