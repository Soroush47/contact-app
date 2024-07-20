import { useState } from "react";

import ContactsList from "./ContactsList";
import Form from "./Form";

import styles from "./Contacts.module.css";

function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [ids, setIds] = useState([]);
    const [removedIds, setRemovedIds] = useState([]);

    const addHandler = form => {
        let newId;
        let removedIdsCopy = [...removedIds];
        let idsCopy = [...ids];

        if (removedIds.length) {
            newId = removedIdsCopy.shift();
            idsCopy.push(newId);
            idsCopy.sort();
            setRemovedIds(removedIdsCopy);
        } else {
            newId = ids.length ? idsCopy[idsCopy.length - 1] + 1 : 0;
            idsCopy.push(newId);
        }
        setIds(idsCopy);
        setContacts(contacts => [...contacts, { id: newId, ...form }]);
    };

    const removeHandler = id => {
        let removedIdsCopy = [...removedIds];
        let idsCopy = [...ids];

        removedIdsCopy.push(id);
        removedIdsCopy.sort();
        idsCopy.splice(idsCopy.indexOf(id), 1);

        setIds(idsCopy);
        setRemovedIds(removedIdsCopy);
        setContacts(contacts => contacts.filter(contact => contact.id !== id));
    };

    return (
        <div className={styles.container}>
            <Form addHandler={addHandler} />
            <ContactsList contacts={contacts} removeHandler={removeHandler} />
        </div>
    );
}

export default Contacts;
