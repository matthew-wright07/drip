"use client"

import styles from './questions.module.css';
import { useState } from 'react';

export default function Questions() {
    const [questionNumber, setQuestionNumber] = useState(1);
    const [showInput, setShowInput] = useState(false);
    function forward(){
        setQuestionNumber(questionNumber+1)
    }
    function backward(){
        setQuestionNumber(questionNumber-1)
    }
    function handleInput(){
        setShowInput(true)
    }
    return (
        <div className={styles.container}>
            {questionNumber===1?<div>
            <h1 className={styles.title}>
                Question 1
            </h1>
            <div className={styles.questionFlex}>
                <h2>What kind of connection are you craving more of lately? (choose all that apply)</h2>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />More play and laughter</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />More affection and cuddles</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />Deeper conversations</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />A little more heat 😏</div>
            </div>
            </div>:null}
            {questionNumber===2?<div>
            <h1 className={styles.title}>
                Question 2
            </h1>
            <div className={styles.questionFlex}>
                <h2>What tends to get in the way? (choose all that apply)</h2>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />We get too busy</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />We don&apos;t always make time</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" /> We&apos;re not always on the same page</div>
                <div><input type="checkbox" id="apple" name="fruits" value="apple" />It&apos;s hard to start those kinds of conversations</div>
            </div>
            </div>:null}
            {questionNumber===3?<div>
            <h1 className={styles.title}>
                Question 3
            </h1>
            <div className={styles.questionFlex}>
                <h2>Choose one to answer:</h2>
                <div><input onClick={handleInput} type="radio" id="apple" name="fruits" value="apple" />What&apos;s the greatest day of your life so far? 🙂</div>
                <div><input onClick={handleInput} type="radio" id="apple" name="fruits" value="apple" />Name something extra cool about your partner 🙂</div>
                {showInput?<div className={styles.formGroup} style={{margin:"10px"}}><input type = "text" placeholder="Your answer"/></div>:null}
            </div>
            </div>:null}
            {questionNumber===4?<div>
            <h1 className={styles.title}>
            You&apos;ve reached your limit for today.
            </h1>
            <div className={styles.questionFlex}>
                <h2>Drip is structured. Slow. Just one question per day. But it only works with both of you.</h2>
                <a className={styles.enterButton} href='/invitation'>Invite</a>
            </div>
            </div>:null}
            {questionNumber!==1 && questionNumber!==4?<button onClick={backward} className={styles.enterButton}>Back</button>:null}
            {questionNumber!==4?<button onClick={forward} className={styles.enterButton}>Next</button>:null}
            {questionNumber!==4?<p>🙂<i>When you see a smiley face, that means your answer could be shared with your partner at some point in the future.</i></p>:null}

    </div>
    )
}
