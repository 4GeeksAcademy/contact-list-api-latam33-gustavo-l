import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate(); 
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        agenda_slug: "myAgenda",
        address: "",
        phone: ""
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(contact);
        navigate("/");  // Navegación de regreso a la lista de contactos
    };

    return (
        <div className="container mt-5">
            <h1>Add a New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        onChange={handleChange}
                        value={contact.full_name}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handleChange}
                        value={contact.email}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        onChange={handleChange}
                        value={contact.address}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        name="phone"
                        onChange={handleChange}
                        value={contact.phone}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Save Contact</button>
            </form>
        </div>
    );
};
