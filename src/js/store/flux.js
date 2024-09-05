const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [], 
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch gustavo liendo agenda");
                    }
                    const data = await response.json();
                    console.log("Fetched agendas: ", data);
                    setStore({ contacts: data.contacts }); 
                } catch (error) {
                    console.error("Error fetching gustavo:", error);
                }
            },

            // fetchAgendas: async () => {
            //     try {
            //         const response = await fetch(`https://playground.4geeks.com/contact/agendas`);
            //         if (!response.ok) {
            //             throw new Error("Failed to fetch agendas");
            //         }
            //         const data = await response.json();
            //         console.log("Fetched agendas: ", data);
            //         setStore({ agendas: data.agendas }); 
            //     } catch (error) {
            //         console.error("Error fetching agendas:", error);
            //     }
            // },

            addContact: async (newContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo/${newContact}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newContact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts(newContact.agenda_slug); 
                    } else {
                        console.error("Error adding contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${updatedContact.agenda_slug}/contacts/${updatedContact.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        getActions().fetchContacts(updatedContact.agenda_slug); 
                    } else {
                        console.error("Error updating contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            deleteContact: async (slug, id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        getActions().fetchContacts(slug); 
                    } else {
                        console.error("Error deleting contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            }
        }
    };
};

export default getState;
