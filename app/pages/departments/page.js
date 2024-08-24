import styles from "@/app/Styles/page.module.css";
import style from "@/app/Styles/home.module.css";
import Link from "next/link";
import CSE from "./Cse/cse.js"

export default async function department() {
    return (
        <main className={styles.main}>
            <div className={style.imagecontainer}>
                <img className={style.image} src="./needed/main.png" alt="College Picture" />
            </div>
            <CSE />
        </main>
    );
}
