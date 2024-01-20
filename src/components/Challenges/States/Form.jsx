import { useState } from 'react';
import './form.css';

export function Form() {
    const [firstName, setFirstfirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e) {
        setFirstfirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleReset() {
        setFirstfirstName('');
        setLastName('');
    }

    return (
        <form onSubmit={e => e.preventDefault()} className='name-form'>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
};

/**
 * Problem: Input is stuck with empty variable and having some problem with remembering the variable.
 * Solution: Use 'useState' hooks to set and retain the data between rendering.
 * 
 */

export function FeedbackForm() {
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('');
    if (isSent) {
        return <h1>Thank you!</h1>;
    } else {
        // eslint-disable-next-line
        return (
            <form onSubmit={e => {
                e.preventDefault();
                alert(`Sending: "${message}"`);
                setIsSent(true);
            }}>
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        );
    }
};

/**
 * Problem: When the feedback is submitted, it’s supposed to display a thank-you message. However, it crashes ;
 * Solution: It crashes because useState is used inside of an else statement, we can't do that. Hooks must be at the top-level of a component.
 */