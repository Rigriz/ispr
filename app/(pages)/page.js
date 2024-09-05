import styles from "../Styles/page.module.css";
import style from "../Styles/home.module.css";
import { MainPage } from "./main/main.js";
import Link from "next/link";
import Head from "next/head";

export default async function Home() {
  return (
    <>
      <Head>
        <title>ISRP | Home</title>
      </Head>
      <main className={styles.main}>
        <div className={style.imagecontainer}>
          <img className={style.image} src="./needed/main.png" alt="College Picture" />
        </div>
        <MainPage />
      </main>
    </>
  );
}
