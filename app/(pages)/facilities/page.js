import styles from "@/app/Styles/facilities.module.css";
import featchData from "../api/fetchdata";



export const metadata = {
    title: "ISRP | Facilities"
}
async function getDataFromMongo() {
    try {
        {/* 
        const apiUrl = 'http://localhost:3000/api/webcontent';
        const params = {
            webcontent: 'Facilities',
        };
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${apiUrl}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const jsonData = await response.json(); // Parse the response data as JSON
        //console.log(jsonData.props.webContent, 'RealData sd');
     */}
        const data = await featchData("cse"); //aditional connection
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
const Listsetter = ({ data, list }) => {
    const id = [list];
    //console.log(data?.[id]);
    return (
        <>
            <div className={styles.li}>
                <ul className={styles.list}>
                    {data && data[list] ? (
                        data?.[id].map((header, index) => (
                            //  console.log(header, index),
                            <li key={index}>{header}</li>
                        ))
                    ) : (< h1 >Data Not available</h1>)}
                </ul>
            </div >
        </>
    );
}
export default async function cse() {
    const data = await getDataFromMongo();
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
                        <h3 className={styles.heading}>{data.heading}</h3>
                        <div className={styles.image}>
                            <img src="" alt="image of dept" />
                        </div>
                        <p className={styles.description}>{data.NewCampusDescription}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading2}</h3>
                        <Listsetter className={styles.li} data={data} list={'LibraryList'} />
                        <p className={styles.description}>{data.LibraryListFooter}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading3}</h3>
                        <p className={styles.description}>{data.heading3desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading4}</h3>
                        <p className={styles.description}>{data.heading4desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading5}</h3>
                        <h3 className={styles.heading}>{data.heading4Footer}</h3>
                        <p className={styles.description}>{data.heading5desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading6}</h3>
                        <p className={styles.description}>{data.heading6desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading7}</h3>
                        <p className={styles.description}>{data.heading7desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading8}</h3>
                        <p className={styles.description}>{data.heading8desc}</p>
                        <p className={styles.description}>{data.heading8desc2}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading9}</h3>
                        <p className={styles.description}>{data.heading9desc}</p>
                        <p className={styles.description}>{data.heading8desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading9}</h3>
                        <p className={styles.description}>{data.heading9desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading10}</h3>
                        <p className={styles.description}>{data.heading10desc}</p>
                    </div>
                    <div className={styles.group}>
                        <h3 className={styles.heading}>{data.heading11}</h3>
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
export { cse };
