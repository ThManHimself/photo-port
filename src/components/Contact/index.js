import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    // event.preventDefault - (goes in event listener)

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    // declare error variable for use in showing what the issue is, if there are some
    const [errorMessage, setErrorMessage] = useState('');

    // sync the internal state of the component formState with the user input from the DOM
    function handleChange(e) {

        // target the email <input>
        if (e.target.name === 'email') {

            // Declare isValid variable for determining of email is a valid email address
            const isValid = validateEmail(e.target.value);

            // show if the email address entered is actually a vaid email address
            console.log(isValid);

            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        // setFormState ONLY IF THERE IS NO ERROR
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    }
    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // JSX
    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={ handleSubmit } >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={ name } onBlur={ handleChange } name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" defaultValue={ email } onBlur={ handleChange } name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={ message } onBlur={ handleChange } rows="5" />
                </div>
                { errorMessage && (
                    <div>
                        <p className="error-text">{ errorMessage }</p>
                    </div>
                ) }
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;