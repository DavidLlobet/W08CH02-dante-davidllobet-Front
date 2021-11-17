import Head from "next/head";
import styles from "./index.module.css";
import Header from "@/components/Header/Header";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <main>
      <h1 className={styles.title}>Bienvenus au Twitter</h1>
    </main>
  </div>
);

export default Home;
