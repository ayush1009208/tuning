import styles from '../styles/form.module.css';

export default function ContactForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label}>Name</label>
      <input type="text" className={styles.input} />
      
      <label className={styles.label}>Email</label>
      <input type="email" className={styles.input} />
      
      <label className={styles.label}>Message</label>
      <textarea className={styles.textarea}></textarea>
      
      <button type="submit" className={styles.button}>Send Message</button>
    </form>
  );
}
