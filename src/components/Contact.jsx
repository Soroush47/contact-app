/* eslint-disable react/prop-types */
import styles from "./Contact.module.css";

function Contact({ data: { name, lastname, email, phone }, remove }) {
    return (
        <li className={styles.contact}>
            <p>
                {name} {lastname}
            </p>
            <p>
                <span>📧</span>
                {email}
            </p>
            <p>
                <span>📞</span>
                {phone}
            </p>
            <button onClick={remove}>🗑</button>
        </li>
    );
}

export default Contact;
