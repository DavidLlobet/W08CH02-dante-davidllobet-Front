import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";
import Header from "@/components/Header/Header";

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />

    <main></main>
  </div>
);

export default Home;
