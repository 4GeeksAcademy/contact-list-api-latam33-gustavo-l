const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo`);
                    
                    if (response.status === 404) {
                        console.log("Agenda not found, creating a new one...");
                        await getActions().createAgenda(); 
                        return; 
                    }
            
                    if (!response.ok) {
                        throw new Error("Failed to fetch Gustavo Liendo's agenda");
                    }
            
                    const data = await response.json();
                    console.log("Fetched contacts: ", data);
                    setStore({ contacts: data.contacts }); 
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            createAgenda: async () => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ slug: "Gustavo-Liendo" })
                    });
            
                    if (!response.ok) {
                        throw new Error("Failed to create the agenda");
                    }
            
                    console.log("Agenda created successfully");
                    getActions().fetchContacts();
                } catch (error) {
                    console.error("Error creating agenda:", error);
                }
            },           

            addContact: async (newContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo/contacts`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newContact)
                    });
                    if (response.ok) {
                        console.log("Contact added successfully");
                        getActions().fetchContacts();
                    } else {
                        console.error("Error adding contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo/contacts/${updatedContact.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact) // Enviar datos del contacto actualizado
                    });
                    if (response.ok) {
                        console.log("Contact updated successfully");
                        getActions().fetchContacts(); // Refrescar lista de contactos
                    } else {
                        console.error("Error updating contact:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },

            // Eliminar un contacto existente
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Gustavo-Liendo/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (response.ok) {
                        console.log("Contact deleted successfully");
                        getActions().fetchContacts(); // Refrescar lista de contactos después de eliminar
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
