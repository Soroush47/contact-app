/* eslint-disable react/prop-types */
import Contact from "./Contact";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts, removeHandler }) {
    return (
        <div className={styles.container}>
            <h3>Contacts List</h3>
            {contacts.length ? (
                <ul className={styles.contacts}>
                    {contacts.map(contact => (
                        <Contact
                            key={contact.id}
                            data={contact}
                            remove={() => removeHandler(contact.id)}
                        />
                    ))}
                </ul>
            ) : (
                <p className={styles.message}>There is no contacts</p>
            )}
        </div>
    );
}

export default ContactsList;
