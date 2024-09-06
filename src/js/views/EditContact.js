import React, { useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams(); // Obtener el ID desde la URL
    const location = useLocation(); // Obtener los datos del contacto a través de la navegación

    const [contact, setContact] = useState({
        name: location.state.name,
        email: location.state.email,
        agenda_slug: "Gustavo-Liendo", // Slug fijo
        address: location.state.address,
        phone: location.state.phone
    });

    const handleChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.updateContact({ ...contact, id }); 
        navigate("/");  
    };

    return (
        <div className="container mt-5">
            <h1>Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                        value={contact.name}
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
