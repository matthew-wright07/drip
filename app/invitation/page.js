"use client"

import { useState } from 'react';
import styles from './invitation.module.css';

export default function Invitation() {
  const [message, setMessage] = useState(
    "You have been invited to Drip, a private space for couples to connect without saying a word. Question by question, relationships become waaaay more fun."
  );
  const [customMessage, setCustomMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [name,setName] = useState('');
  const [done,setDone] = useState(false)

  function handleMessageToggle(event){
    event.preventDefault();
    setCustomMessage(!customMessage);
  };

  function handleMessageChange(event){
    setMessage(event.target.value);
  };
  function handleEmailChange(event){
    setEmail(event.target.value)
  }
  function handleNameChange(event){
    setName(event.target.value)
  }
  async function handleSubmit(event){
    const response = await fetch('/api/invite',{
      method:"POST",
      body: JSON.stringify({email:email,message:message,name:name}),
    })
    const data = await response.json()
    setDone(true)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invite your partner</h1>
      <p className={styles.subtitle}>Trust me, it won&#39;t be any fun without them.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input onChange={handleNameChange} type="text" placeholder="Partner's first name" required />
        </div>

        <div className={styles.formGroup}>
          <input onChange={handleEmailChange} type="email" placeholder="Partner's email address" required />
        </div>

        <div className={`${styles.formGroup} ${styles.messageArea}`}>
          <a
            href="#"
            className={styles.messageToggle}
            onClick={handleMessageToggle}
          >
            {customMessage ? 'Save message' : 'Customize message'}
          </a>
          <textarea
            value={message}
            placeholder="Ryan invited you to Drip..."
            onChange={handleMessageChange}
            disabled={!customMessage}
          />
        </div>

        <button type="submit" className={styles.continueButton}>
          Invite
        </button>
        {done?<p className={styles.done}>Email Sent</p>:null}
      </form>
    </div>
  );
}
