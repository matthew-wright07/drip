"use client"

import { useState } from 'react';
import styles from './registration.module.css';

export default function Registration() {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    async function sendEmail(){
        const response = await fetch('/api/email',{
            method:"POST",
            body: JSON.stringify({firstName:firstName,email:email})
        })
        const data = await response.json()
    }
    function handleNameChange(event){
        setFirstName(event.target.value)
    }
    function handleEmailChange(event){
        setEmail(event.target.value)
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Welcome. This is a private community and is currently in Beta. We will email you your link to join. Please register below.
            </h1>
            <form onSubmit={sendEmail}>
                <div className={styles.formGroup}>
                    <input onChange={handleNameChange} type="text" placeholder="My first name" required />
                </div>

                <div className={styles.formGroup}>
                    <input onChange={handleEmailChange} type="email" placeholder="My email address" required />
                </div>

                <button type="submit" className={styles.enterButton}>Submit</button>
            </form>
        </div>
)
}