import styles from '@/app/Styles/grievance.module.css';
import fetchData from '../api/fetchdata';
import Link from 'next/link';

export const metadata = {
    title: "ISRP | Grievance"
}
async function getDataFromMongo() {
    try {
        const apiUrl = 'https://isrpapi.vercel.app/api/webcontent';
        const params = {
            webcontent: 'Grievance',
        };
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${apiUrl}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const jsonData = await response.json(); // Parse the response data as JSON
        //console.log(jsonData.props);
        //console.log(jsonData);
        {/* 
          const data = await fetchData("Grievance");
          console.log(data);
        */}
        return jsonData.props.webContent; // Return the homepage content on success
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

export default async function Antiragging() {
    const data = await getDataFromMongo();
    //console.log(data, "gotta");
    //console.log(data, "heimana")
    return (
        <>
            <section className={styles.section}>
                <div className={styles.content}>
                    <div className={styles.group}>
                        <p className={styles.heading}>{data.page}</p>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.contect}>
                            <div>
                                <p className={styles.headline}>{data.title}</p>
                            </div>
                            <p className={styles.description}>{data.description}<br /></p>
                            <p className={styles.description}>{data.description1}<br /></p>
                            <div className={styles.footer}>
                                <Link href='../../app2/'><p className={styles.footerlink}>{data.Footer}</p></Link>
                                <Link href='../../app2/'><p className={styles.footerlink}>{data.Footer1}</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
