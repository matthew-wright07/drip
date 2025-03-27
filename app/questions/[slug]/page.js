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
                <div><input type="checkbox" id="play" name="play" value="play" /><label htmlFor='play'>More play and laughter</label></div>
                <div><input type="checkbox" id="affection" name="affection" value="affection" /><label htmlFor='affection'>More affection and cuddles</label></div>
                <div><input type="checkbox" id="conversations" name="conversations" value="conversations" /><label htmlFor='conversations'>Deeper conversations</label></div>
                <div><input type="checkbox" id="heat" name="heat" value="heat" /><label htmlFor='heat'>A little more heat 😏</label></div>
            </div>
            </div>:null}
            {questionNumber===2?<div>
            <h1 className={styles.title}>
                Question 2
            </h1>
            <div className={styles.questionFlex}>
                <h2>What tends to get in the way? (choose all that apply)</h2>
                <div><input type="checkbox" id="busy" name="busy" value="busy" /><label htmlFor='busy'>We get too busy</label></div>
                <div><input type="checkbox" id="page" name="page" value="page" /><label htmlFor='page'>We&apos;re not always on the same page</label></div>
                <div><input type="checkbox" id="time" name="time" value="time" /><label htmlFor='time'>We don&apos;t always make time</label></div>
                <div><input type="checkbox" id="hard" name="hard" value="hard" /><label htmlFor='hard'>It&apos;s hard to start those kinds of conversations</label></div>
            </div>
            </div>:null}
            {questionNumber===3?<div>
            <h1 className={styles.title}>
                Question 3
            </h1>
            <div className={styles.questionFlex}>
                <h2>Choose one to answer:</h2>
                <div><input onClick={handleInput} type="radio" id="option1" name="question" value="question" /><label htmlFor='option1'>What&apos;s the greatest day of your life so far? 🙂</label></div>
                <div><input onClick={handleInput} type="radio" id="option2" name="question" value="question" /><label htmlFor='option2'>Name something extra cool about your partner 🙂</label></div>
                {showInput?<div className={styles.formGroup} style={{margin:"10px"}}><input type = "text" placeholder="Your answer"/></div>:null}
            </div>
            </div>:null}
            {questionNumber===4?
            <div className={styles.container}>
                <h1 className={styles.title}>
                You&apos;ve reached <br/> your limit for today.
                </h1>
                <h2>Drip is structured. Slow. Just one question per day. But it only works with both of you.</h2>
                <a className={styles.enterButton} href='/invitation'>Invite</a>
            </div>:null}
            <div>
            {questionNumber!==1 && questionNumber!==4?<button onClick={backward} className={styles.enterButton}>Back</button>:null}
            {questionNumber!==4?<button onClick={forward} className={styles.enterButton}>Next</button>:null}
            </div>
            {questionNumber!==4?<p>🙂<i>When you see a smiley face, that means your answer could be shared with your partner at some point in the future.</i></p>:null}

    </div>
    )
}
