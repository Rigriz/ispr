import styles from "@/app/Styles/SrikrishnaTrust.module.css";
import featchData from "@/app/pages/api/fetchdata";

async function featch() {
    try {
        const data = await featchData("SriKrishnaShikshanaPrathisthanaTrustGoverningCouncilandFacultyDetails");
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

const TrustMembersTable = ({ data, identifier }) => {
    //console.log(data);
    // const id = [identifier]
    // console.log(data?.[id]);
    let tableType = ["SL.No", "Name", "Designation"];;
    if (identifier === 'trustMembers' || identifier === 'GoverningMembers' || identifier === 'OfficeFaculties') {
        tableType = ["SL.No", "Name", "Designation"];
    } else if (identifier === 'CSEFaculties' || identifier === "ADFTFaculties" || identifier === 'MECFaculties' || identifier === 'ECFaculties') {
        tableType = ["SL.No", "Name", "Designation", "Qualification"];
    }
    //  console.log(tableType);
    return (
        <table>
            <thead className={styles.th}>
                <tr className={styles.tr} >
                    {tableType.map((header, index) => (
                        <th className={styles.th} key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data && data[identifier] ? (
                    data[identifier].map((item, index) => (
                        // console.log(`Item at index ${index}:`, item), //index is number 0 and item is single name and designation
                        <tr className={styles.tr} key={index}>
                            {tableType && tableType.map((header, headerIndex) => (
                                //  console.log(`singleunit:${headerIndex}: and ${header}: accessing by headerofitem: ${item[header]}`),
                                <td className={styles.td} key={headerIndex}>
                                    {header === "SL.No" ? index + 1 : item[header]}
                                </td>
                            ))}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={tableType.length}>No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
export default async function aboutus() {
    const data = await featch();
    //console.log(data.trustMembers, "gotta");
    //console.log(data, "heimana")
    return (
        <>
            <section className={styles.section}>
                <div className={styles.content}>

                    <p className={styles.heading}>{data.page}</p>
                    <div className={styles.group}>
                        <div >
                            <p className={styles.description}>{data.title}</p>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <TrustMembersTable data={data} identifier="trustMembers" /> </div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.Title}>
                            <p className={styles.FacultyTitle}>{data.GoverningCouncilTitle}</p>
                        </div>
                        <div className={styles.container}>
                            <div className={styles.table} ><TrustMembersTable data={data} identifier="GoverningMembers" /></div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.Title}>
                            <p className={styles.FacultyTitle}>{data.FacultyTitle.title}</p>
                        </div>
                        <div className={styles.FacultyTitle}>{data.FacultyTitle.CSETitle}</div>

                        <div className={styles.container}>
                            <div className={styles.table} ><TrustMembersTable data={data} identifier="CSEFaculties" /></div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.FacultyTitle}>{data.FacultyTitle.ECTitle}</div>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <TrustMembersTable data={data} identifier="ECFaculties" /> </div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.FacultyTitle}>{data.FacultyTitle.ADFTTitle}</div>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <TrustMembersTable data={data} identifier="ADFTFaculties" />
                            </div>/
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.FacultyTitle}>{data.FacultyTitle.MECTitle}</div>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <TrustMembersTable data={data} identifier="MECFaculties" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.group}>
                        <div className={styles.FacultyTitle}>{data.FacultyTitle.title}</div>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <TrustMembersTable data={data} identifier="OfficeFaculties" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export { aboutus };
