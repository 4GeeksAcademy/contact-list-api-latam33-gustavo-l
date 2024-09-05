import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContacts(); 
        // actions.fetchAgendas(); 
    }, []);

    // if (!Array.isArray(store.agendas)) {
    //     console.error("store.agendas is not an array:", store.agendas);
    //     return <p>Loading contacts...</p>;
    // }

    return (
        <div className="container mt-5">
            <h1>Contact List</h1>
            <div className="list-group mt-4">
                {store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard
                            key={index}
                            name={contact.name}
                            address={contact.address}
                            phone={contact.phone}
                            email={contact.email}
                            onDelete={() => actions.deleteContact(contact.agenda_slug, contact.id)}
                        />
                    ))
                ) : (
                    <p>No contacts found</p>
                )}
            </div>
        </div>
    );
};
