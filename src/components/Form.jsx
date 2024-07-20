/* eslint-disable react/prop-types */
import { useState } from "react";

import inputs from "../constants/input";

import styles from "./Form.module.css";

function Form({ addHandler }) {
    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });
    const [alert, setAlert] = useState("");

    const formHandler = event => {
        const name = event.target.name;
        const newValue = event.target.value;

        setForm(form => ({ ...form, [name]: newValue }));
    };

    const add = event => {
        event.preventDefault();
        const errTitle = Object.keys(form).find(k => form[k].trim() === "");
        if (errTitle) {
            // setErr(
            //     <p>
            //         Please enter your <span style={{ color: "red" }}>{errTitle}</span>
            //     </p>
            // );
            setAlert(
                <p>
                    Please enter your{" "}
                    <span>{errTitle === "lastname" ? "last name" : errTitle}</span> !
                </p>
            );
        } else {
            setAlert("");
            setForm({ name: "", lastname: "", email: "", phone: "" });
            addHandler(form);
        }
    };

    return (
        <>
            <form onSubmit={add} className={styles.container}>
                {inputs.map((input, index) => (
                    <input
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={form[input.name]}
                        key={index}
                        onChange={formHandler}
                    />
                ))}
                {/* <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={form.name}
                    onChange={formHandler}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={form.lastname}
                    onChange={formHandler}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={form.email}
                    onChange={formHandler}
                />
                <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={formHandler}
                /> */}
                <button
                    type="submit"
                    className={styles.button}
                >
                    <span>Add Contact</span>
                </button>
            </form>
            <div className={styles.alert}>{alert}</div>
        </>
    );
}

export default Form;
