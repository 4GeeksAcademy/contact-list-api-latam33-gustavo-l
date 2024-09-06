import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts(); 
    }, []);

    if (!Array.isArray(store.contacts)) {
        console.error("store.contacts is not an array:", store.contacts);
        return <p>Loading contacts...</p>;
    }

    return (
        <div className="container mt-5">
            <h1>Contact List</h1>
            <div className="list-group mt-4">
                {store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            id={contact.id}  
                            name={contact.name}
                            address={contact.address}
                            phone={contact.phone}
                            email={contact.email}
                            onEdit={(id) => {
                                console.log("Edit contact with ID:", id);

                            }}
                            onDelete={(id) => {
                                actions.deleteContact(id); 
                            }}
                        />
                    ))
                ) : (
                    <p>No contacts found</p>
                )}
            </div>
        </div>
    );
};
