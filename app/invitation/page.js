"use client"

import { useState } from 'react';
import styles from './invitation.module.css';

export default function Invitation() {
  const [message, setMessage] = useState(
    "Ryan invited you to Drip, a private space for couples to connect without saying a word. Question by question, relationships become waaaay more fun."
  );
  const [customMessage, setCustomMessage] = useState(false);

  const handleMessageToggle = (e) => {
    e.preventDefault();
    setCustomMessage(!customMessage);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Invite your partner</h1>
      <p className={styles.subtitle}>Trust me, it won&#39;t be any fun without them.</p>

      <form>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Partner's first name" required />
        </div>

        <div className={styles.formGroup}>
          <input type="email" placeholder="Partner's email address" required />
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
      </form>
    </div>
  );
}
