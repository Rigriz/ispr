import styles from "@/app/Styles/antiragging.module.css";
//import featchData from "../../api/fetchdata";


export const metadata = {
    title: "ISRP | E&C"
}
async function featch() {
    try {
        const apiUrl = 'https://isrpapi.vercel.app/api/webcontent';
        const params = {
            webcontent: 'ec',
        };
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${apiUrl}?${queryString}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
            }
        });
        const jsonData = await response.json(); // Parse the response data as JSON
        //console.log(jsonData.props.webContent, 'RealData sd'); 
        // const data = await featchData("cse"); //aditional connection
        return jsonData.props.webContent; //Return the homepage content on success
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
export default async function ec() {
    const data = await featch();
    //console.log(data, "gotta");
    // console.log(data, "heimana")
    return (
        <>
            <section className={styles.section}>
                <div className={styles.Content}>
                    <div className={styles.group}>
                        <div className={styles.container}>
                            <h1 className={styles.headline}>{data.Title}</h1>
                            <Listsetter className={styles.li} data={data} list={'list'} />
                        </div>
                        <div className={styles.image}>
                            <img src="" alt="image of dept" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export { ec };
