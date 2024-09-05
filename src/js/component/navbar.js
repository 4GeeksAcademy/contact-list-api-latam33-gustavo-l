import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">Contact Manager</Link>
            <Link to="/add-contact" className="btn btn-primary">Add new contact</Link>
        </nav>
    );
};
