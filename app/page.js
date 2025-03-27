import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <img src="altlogo.png" className={styles.heart} style={{width:"30px"}}/>
        <p>Drip</p>
      </div>

      <div className={styles.content}>
        <h1>
          What if asking for what you
          <br />
          want... didn&#39;t feel like
          <br />
          asking?
        </h1>

        <p className={styles.description}>
          Drip is a private space for couples to connect without saying a word. Question by question, drip by drip, relationships become deeper, hotter, and way more fun.
        </p>

        <a href="/registration" className={styles.ctaButton}>
          Start
        </a>
      </div>
    </>
  );
}
