import React, { useEffect, useState } from "react";

const DashUser = () => {
    
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newUsers, setNewUsers] = useState({
        name: '',
        email: '',
        img: '',
        desc: '' // Changed to match the state initializati
    });

    useEffect(() => {
        const loadUserfromlocal = () => {
            const storedHotels = localStorage.getItem('users');
            if (storedHotels) {
                setUsers(JSON.parse(storedHotels));
            } else {
                console.error("No users found in local storage.");
            }
        };

        loadUserfromlocal();
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const sliceDescription = (desc) => {
        const words = desc.split(' ');
        return words.length > 50 ? words.slice(0, 50).join(' ') + '...' : desc;
    };

    const sliceImg = (img) => {
        const words = img.split('');
        return words.length > 50 ? words.slice(0, 30).join('') + '...' : img;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setNewUsers(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = () => {
        if (!newUsers.name || !newUsers.email) {
            alert("Please fill out all required fields.");
            return;
        }
        const updatedUsers = { id: Date.now(), ...newUsers };
        setUsers(prevUsers => [...prevUsers, updatedUsers]);
        setShowForm(false);
        setNewUsers({
            name: '',
            email: '',
           
           
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave();
    };

    const handleDelete = (id) => {
        
    };

    return (
        <>
            <div className="ml-[10px] p-4">
                <div>
                    <button onClick={() => setShowForm(true)}
                        type="button"
                        className="bg-blue-500 text-white p-2 rounded w-[150px] mb-4"
                    >
                       Add Users
                    </button>
                </div>

                <table className="min-w-full bg-gray-400 border border-gray-500">
                    <thead>
                        <tr className="py-2 px-4 border-b">
                            <th className="px-4">Id</th>
                            <th className="px-4">Name</th>
                            <th className="px-4">Email</th>
                            <th className="px-4">Actions</th> {/* Added for Edit/Delete buttons */}
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((users) => (
                            <tr className="py-2 px-4 border-b" key={users.id}>
                                <td className="py-2 px-4 border-b">{users.id}</td>
                                <td className="py-2 px-4 border-b">{users.name}</td>
                                <td className="py-2 px-4 border-b">{users.email}</td>
                                <td className="border px-4 py-2">
                                    <button className="bg-black hover:bg-orange-400 text-white font-bold py-1 px-2 rounded mt-3 w-[80px]">Edit</button>
                                    <button onClick={() => handleDelete(users.id)} className="bg-black hover:bg-orange-400 text-white ml-4 font-bold py-1 px-2 rounded mt-3 w-[80px]">Delete</button> {/* Added onClick for delete */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {showForm && (
                        <form onSubmit={handleSubmit}> {/* Added onSubmit handler */}
                        <h2 className="text-2xl font-bold mt-3 mb-3">Add New User</h2>
                            <div className="flex flex-col text-2xl">
                                <label htmlFor="">Name</label>
                                <input type="text" onChange={handleChange} name="name" value={newUsers.name} className="bg-blue border border-blue-500 mb-3 mt-5 w-1/3" />
                                <label htmlFor="">Email</label>
                                <input type="text" onChange={handleChange} name="email" value={newUsers.email} className="bg-blue border border-blue-500 mb-3 mt-5 w-1/3" />
                               
                               
                                <br />
                                <div className="flex">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded w-[100px] mb-4"
                                    >
                                        Submit
                                    </button>
                                    <button onClick={() => setShowForm(false)}
                                        type="button"
                                        className="bg-blue-500 text-white p-2 rounded w-[100px] mb-4 ml-5"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default DashUser;
