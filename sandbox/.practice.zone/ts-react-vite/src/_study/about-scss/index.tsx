import styles from "./index.module.scss"

export default function Index() {
    const btnStyle = `${styles.button} ${styles[`button--primary`]}`;

  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>SCSS Module 실습</h2>
        <p className={styles.text}>Nesting</p>
      </div>
      <button className={btnStyle}>Paritals & Modules</button>
      <div className={styles.info}>INFO</div>
      <div className={styles.alert}>SUCCESS</div>
      <div className={styles.success}>ALERT</div>
      <hr />
      <div className={styles.message}>Message 스타일 체크</div>
      <div className={styles.error}>Error 스타일 체크</div>
      <div className={styles.warning}>Warning 스타일 체크</div>
    </>
  );
}