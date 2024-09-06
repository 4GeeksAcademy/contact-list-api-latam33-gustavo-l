import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const ContactCard = ({ id, name, address, phone, email, onEdit, onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
                <img
                    src="https://via.placeholder.com/100"
                    alt="Contact"
                    className="rounded-circle"
                />
                <div className="contact-info">
                    <h5>{name}</h5>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
            <div>
                <button
                    className="btn btn-light"
                    onClick={() => navigate(`/edit-contact/${id}`, {
                        state: { name, address, phone, email }
                    })}
                >
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-light" onClick={() => onDelete(id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};
