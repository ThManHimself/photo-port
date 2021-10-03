import React, { useState } from "react";

function ContactForm() {
    // event.preventDefault - (goes in event listener)

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    // sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }

    console.log(formState);

    // JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={ name } onChange={ handleChange } name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={ email } onChange={ handleChange } name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={ message } onChange={ handleChange } rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;