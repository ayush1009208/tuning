import styles from '../styles/form.module.css';

export default function QuoteForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>Full Name</label>
      <input type="text" className={styles.input} />
      
      <label className={styles.label}>Email</label>
      <input type="email" className={styles.input} />
      
      <label className={styles.label}>Vehicle Details</label>
      <textarea className={styles.textarea}></textarea>
      
      <button type="submit" className={styles.button}>Request Quote</button>
    </form>
  );
}
