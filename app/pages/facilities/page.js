<<<<<<< HEAD
=======
import DOMPurify from "isomorphic-dompurify";
import getStaticProps from "@/app/components/getdata";
>>>>>>> a1e1fcdd6300edb8ebaee823f03a0ba1e7e8f819
import styles from "@/app/Styles/facilities.module.css";
async function featch() {
    try {
        const data = await getStaticProps();
        //console.log(data);
        return data.props.webContent.Facilities; //Return the homepage content on success
    } catch (error) {
        console.error(
            "Error retrieving data from MongoDB getDataFromMongo:",
            error,
        );
        return { error: error.message }; // Return an error object on failure
    }
}
const Listsetter = ({ data, list }) => {
    const id = [list];
    //console.log(data?.[id]);
    return (
        <>
            <div className={styles.li}>
                {data && data[list] ? (
                    data?.[id].map((header, index) => (
                        //  console.log(header, index),
                        <ul key={index} className={styles.list}>
                            <li key={index}>{header}</li>
                        </ul>
                    ))
                ) : (< h1 >Data Not available</h1>)}
            </div >
        </>
    );
}
export default async function facilities() {
    const data = await featch();
    //console.log(data, "gotta");
    // console.log(data, "heimana")
    return (
        <>
            <section className={styles.section}>
                <div className={styles.groups}>
                    <div className={styles.Content}>
                        <h1 className={styles.headline}>{data.Title}</h1>
                        <div className={styles.group}>
                            <h1 className={styles.headline}>{data.Title2}</h1>
                            <p className={styles.description}>{data.Description}</p>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading}</h4>
                        <div className={styles.image}>
                            <img src="" alt="image of dept" />
                        </div>
                        <p className={styles.description}>{data.NewCampusDescription}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading2}</h4>
                        <Listsetter className={styles.li} data={data} list={'LibraryList'} />
                        <p className={styles.description}>{data.LibraryListFooter}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading3}</h4>
                        <p className={styles.description}>{data.heading3desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading4}</h4>
                        <p className={styles.description}>{data.heading4desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading5}</h4>
                        <h4 className={styles.heading}>{data.heading4Footer}</h4>
                        <p className={styles.description}>{data.heading5desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading6}</h4>
                        <p className={styles.description}>{data.heading6desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading7}</h4>
                        <p className={styles.description}>{data.heading7desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading8}</h4>
                        <p className={styles.description}>{data.heading8desc}</p>
                        <p className={styles.description}>{data.heading8desc2}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading9}</h4>
                        <p className={styles.description}>{data.heading9desc}</p>
                        <p className={styles.description}>{data.heading8desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading9}</h4>
                        <p className={styles.description}>{data.heading9desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading10}</h4>
                        <p className={styles.description}>{data.heading10desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h4 className={styles.heading}>{data.heading11}</h4>
                        <p className={styles.description}>{data.heading11desc}</p>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.container}>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
