import styles from '@/app/Styles/grievance.module.css';
import featchData from "../api/fetchdata";
import Link from 'next/link';
import Head from 'next/head';
async function featch() {
    try {
        const data = await featchData("Grievance");
        console.log(data);
        return data.props.webContent; //Return the homepage content on success
    } catch (error) {
        console.error(
            "Error retrieving data from MongoDB getDataFromMongo:",
            error,
        );
        return {
            error: error.message
        }; // Return an error object on failure
    }
}
export default async function antiragging() {
    const data = await featch();
    console.log(data, "gotta");
    // console.log(data, "heimana")
    return (
        <>
        <Head>
            <title>
                ISRP | Grievance
            </title>
        </Head>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.group}>
                        <p className={styles.heading}>{data.page}</p>
                    </div>
                    <div className={styles.group}>
                    <div className={styles.contect}>
                            <div >
                                <p className={styles.headline}>{data.title}</p>
                            </div>
                            <p className={styles.description}> {data.description}<br /></p>
                            <p className={styles.description}>   {data.description1}<br /></p>
                            <div className={styles.footer}>
                                <Link href='../../app2/'><p className={styles.footerlink}>{data.Footer}</p></Link>
                                <Link href='../../app2/'>  <p className={styles.footerlink}>{data.Footer1}</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export { antiragging };
