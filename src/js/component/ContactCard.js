import React from "react";
import PropTypes from "prop-types";
import "../../styles/home.css";

export const ContactCard = ({ name, address, phone, email, onEdit, onDelete }) => {
    return (
        <div className="list-group-item list-group-item-action">
            <div className="d-flex align-items-center">
                <img
                    src="https://via.placeholder.com/50"
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
                <button className="btn btn-light" onClick={onEdit}>
                    <i className="fas fa-pencil-alt"></i>
                </button>
                <button className="btn btn-light" onClick={onDelete}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    );
};

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
};
