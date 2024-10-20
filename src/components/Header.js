import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="/" className={styles.navLink}>Home</a></li>
          <li className={styles.navItem}><Link href="/about" className={styles.navLink}>About Us</Link></li>
          <li className={styles.navItem}><Link href="/services" className={styles.navLink}>Our Services</Link></li>
          <li className={styles.navItem}><Link href="/contact-us" className={styles.navLink}>Contact Us</Link></li>
          <li className={styles.navItem}><Link href="/request-a-quote" className={styles.navLink}>Request a Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
}
