import Link from "next/link";
import styles from "./Styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.link}>Tuitah</a>
      </Link>
      <Link href="/createTuit">
        <a className={styles.link}>Crear Tuit</a>
      </Link>
    </header>
  );
};

export default Header;
