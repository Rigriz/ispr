import styles from "./Styles/page.module.css";
import style from "./Styles/home.module.css";
import { MainPage } from "./pages/main";
import Link from "next/link";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={style.imagecontainer}>
        <img className={style.image} src="./needed/main.png" alt="College Picture" />
      </div>
      <MainPage />
    </main>
  );
}
