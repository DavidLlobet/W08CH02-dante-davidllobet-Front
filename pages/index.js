import Head from "next/head";
import styles from "./index.module.css";
import Header from "@/components/Header/Header";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Tuitah</title>
      <link rel="icon" href="/bird.png" />
    </Head>
    <Header />

    <main>
      <h1 className={styles.title}>Bienvenus au Tuitah</h1>
    </main>
  </div>
);

export default Home;
