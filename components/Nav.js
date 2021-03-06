import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>unforseen incidents</div>
      <ul className={styles.nav}>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="podcast">podcast</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
