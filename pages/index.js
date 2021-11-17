import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Link className="nav-link" href="/">
      HOME/
    </Link>
    <Link className="nav-link" href="/Tuits">
      TUITS/
    </Link>
    {/* <Link className="nav-link" href="/CreatePost">
      CREAR TUIT/
    </Link> */}
    <main></main>
  </div>
);

export default Home;
