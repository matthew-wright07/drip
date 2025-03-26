import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.logo}>
        <span className={styles.heart}>♥</span> Drip
      </div>

      <div className={styles.content}>
        <h1>
          What if asking for what you
          <br />
          want... didn't feel like
          <br />
          asking?
        </h1>

        <p className={styles.description}>
          Drip is a private space for couples to connect without saying a word. Question by question, drip by drip, relationships become deeper, hotter, and way more fun.
        </p>

        <a href="/registration" className={styles.ctaButton}>
          Start Free
        </a>
      </div>
    </>
  );
}
