"use client"

import { useState } from 'react';

import styles from './registration.module.css';

export default function Registration() {
    const [questionNumber, setQuestionNumber] = useState(0);
    function addQuestion() {
        setQuestionNumber(questionNumber + 1);
    }
    function subtractQuestion() {
        setQuestionNumber(questionNumber - 1);
    }

    return (
        <div className={styles.container}>
            {
            questionNumber===0?
            <>
            <h1 className={styles.title}>
                Welcome. This is a private community and is currently in Beta. We will email you your link to join. Please register below.
            </h1>
            <form>
                <div className={styles.formGroup}>
                    <input type="text" placeholder="My first name" required />
                </div>

                <div className={styles.formGroup}>
                    <input type="email" placeholder="My email address" required />
                </div>

                <button onClick={addQuestion} className={styles.enterButton}>Continue</button>
            </form>
            </>
            :null
            }
            {
            questionNumber===1?
            <>
            <h1 className={styles.title}>
                Question 1
            </h1>
            <form>
                <div className={styles.questionFlex}>
                <h2>What kind of connection are you craving more of lately?</h2>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> More play and laughter</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> More affection and cuddles</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> Deeper conversations</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />A little more heat 😏 </div>
                </div>
                <button onClick={subtractQuestion} className={styles.enterButton}>Back</button>
                <button onClick={addQuestion} className={styles.enterButton}>Continue</button>
            </form>
            </>
            :null
            }
            {
            questionNumber===2?
            <>
            <h1 className={styles.title}>
                Question 2
            </h1>
            <form>
                <div className={styles.questionFlex}>
                <h2>What tends to get in the way?</h2>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> We get too busy</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> We don’t always make time</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> We’re not always on the same page</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />It’s hard to start those kinds of conversations</div>
                </div>
                <button onClick={subtractQuestion} className={styles.enterButton}>Back</button>
                <button onClick={addQuestion} className={styles.enterButton}>Continue</button>
            </form>
            </>
            :null
            }
            {
            questionNumber===3?
            <>
            <h1 className={styles.title}>
                Question 3
            </h1>
            <form>
                <div className={styles.formGroup} style={{textAlign: 'center'}}>
                <h2>Choose one to answer</h2>
                <label htmlFor="GreatestDay">What&aposs the greatest day of your life so far? 🙂</label>
                <input type='text' id='GreatestDay' name='GreatestDay' />
                <label htmlFor="SomethingCool">Name something extra cool about your partner 🙂</label>
                <input type='text' id='GreatestDay' name='GreatestDay' />
                </div>
                <button onClick={subtractQuestion} className={styles.enterButton}>Back</button>
                <button onClick={addQuestion} className={styles.enterButton}>Continue</button>
            </form>
            </>
            :null
            }
            {
            questionNumber===4?
            <>
                <div className={styles.formGroup} style={{textAlign: 'center'}}>
                <h2>Drip is structured. Slow. Just one question per day. But it only works with both of you.</h2>
                <p>Invite your partner to join you.</p>
                <a className={styles.enterButton} href="/invitation" style={{textDecoration:"none"}}>Invite</a>
                </div>
            </>

            :null
            }
        </div>
    );
}
