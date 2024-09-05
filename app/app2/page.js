import styles from "../Styles/page.module.css";
import style from "../Styles/home.module.css";

export default async function Home() {
    return (
        <section className={styles.main}>
            <div className={style.imagecontainer}>
                <h1> Hello</h1>
            </div>
        </section>
    );
}
