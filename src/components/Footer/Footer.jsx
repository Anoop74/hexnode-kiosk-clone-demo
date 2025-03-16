import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <h1 className={styles.heading}>
        Sign up and try Hexnode free for 14 days!
      </h1>

      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Your Work Email"
          className={styles.input}
        />
        <button className={styles.button}>GET STARTED</button>
      </div>

      <div className={styles.note}>
        No credit cards required.{" "}
        <a href="#" className={styles.link}>
          Request a demo &gt;
        </a>
      </div>
    </div>
  );
};
