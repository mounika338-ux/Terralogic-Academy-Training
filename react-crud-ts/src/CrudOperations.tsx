import React, { useState } from 'react';
import axiosClient from './api/axiosClient';
import { User } from "./types/User"

const CrudOperations:React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [fromData, setFromData] = useState<User>({
        name: "",
        email: "",
        phone: "",
    });
    const [selectedId, setSelectedId] = useState<number | null>(null);
    // * GET all users
    const handleFetchUsers = async () => {
        try {
            const res = await axiosClient.get<User[]>("/users");
            setUsers(res.data);
            console.log("Fetched users:", res.data);
        }catch (err) {
            console.error("Error fetching users", err);
        }
    };


    // * POST (add) user
    const handleAddUser = async () => {
        try {
            const res = await axiosClient.post<User>("/users", fromData);
            setUsers([...users, res.data]);
            console.log("User added:", res.data);
            setFromData({ name: "", email: "", phone: ""});
        } catch (err) {
            console.error("Error adding user", err);
        }
    };

    // * PUT (update) user

    const handleUpdateUser = async () => {
        if (!selectedId) return alert("Select a user ID to update");
        try {
            const res = await axiosClient.put<User>(`/users/${selectedId}`, fromData);
            setUsers(
                users.map((u) => (u.id === selectedId ? {...u, ...fromData} : u))
            );
            console.log("User updated: ", res.data);
            setSelectedId(null);
            setFromData({ name: "", email: "", phone: ""});
        } catch (err) {
            console.error("Error updating user", err);
        }
    };

    // * DELETE user

    const handleDeleteUser = async (id: number) => {
        try {
            await axiosClient.delete(`/users/${id}`);
            setUsers(users.filter((u) => u.id !== id));
            console.log(`User with ID ${id} delete`);
        } catch (err) {
            console.error("Error deleting user", err);
        }
    };

    // * Handle input changes

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFromData({ ...fromData, [e.target.name]: e.target.value});
    };

    // * Load user data into from for edit

    const handleEditClick = (user : User) => {
        setSelectedId(user.id!);
        setFromData({ name: user.name, email: user.email, phone: user.phone });
    };
    return (
        <div style={{padding: 30}}>
            <h1>React + TypeScript CRUD (Axios)</h1>

            {/* CRUD Buttons */}
            <div style={{marginBottom: 20 }}>
                <button onClick={handleFetchUsers}>Get All Users</button>
            </div>

            {/* From */}
            <div style={{ display: "flex", gap:10, marginBottom: 10}}>
                <input name = "name" placeholder = "Name" value = {fromData.name} onChange={handleChange} />
                <input name = "email" placeholder = "Email" value = {fromData.email} onChange = {handleChange} />
                <input name = "phone" placeholder = "Phone" value = {fromData.phone} onChange = {handleChange} />
                {selectedId ? (
                    <button onClick={handleUpdateUser}>Update User</button>

                ) : (
                    <button onClick={handleAddUser}> Add User</button>
                )}
            </div>

            {/* User Table */}
            {users.length > 0 && (
                <table border={1} cellPadding={8} style={{ width: "100%"}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.phone}</td>
                                <td>
                                    <button onClick={() => handleEditClick(u)}>Edit</button>
                                    <button onClick={() => handleDeleteUser(u.id!)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default CrudOperations;