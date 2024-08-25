import styles from '@/app/Styles/grievance.module.css';
import featchData from "../api/fetchdata";

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
                                <p className={styles.footerlink}>{data.Footer}</p>
                                <p className={styles.footerlink}>{data.Footer1}</p>
                            </div>

                        </div>
                        <p className={styles.heading}>
                            {data.heading3}</p>
                        <div className={styles.container}>
                            <div className={styles.table} >
                            </div>
                        </div>
                        <p className={styles.heading}>{data.heading4}</p>
                        <div className={styles.container}>
                            <div className={styles.table} >
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.FooterNote} >{data.FooretTitle}</h4>
                        <p className={styles.FooterNote}>{data.FooterDescription}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export { antiragging };
