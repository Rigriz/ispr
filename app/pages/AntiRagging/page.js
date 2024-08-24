import getStaticProps from '@/app/Components/getdata';
import styles from '@/app/Styles/antiragging.module.css';
async function featch() {
    try {
        const data = await getStaticProps();
        //console.log(data);
        return data.props.webContent.AntiRagging; //Return the homepage content on success
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
        <div className={styles.li}>
            {data && data[list] ? (
                data?.[id].map((header, index) => (
                    //  console.log(header, index),
                    <ul key={index} className={styles.list}>
                        <li key={index}>{header}</li>
                    </ul>
                ))) : (
                <tr>
                    <td colSpan={tableType.length}>No data available</td>
                </tr>
            )
            }
        </div>
    );
}
const MembersTable = ({ data, identifier }) => {
    // console.log(data);
    // const id = identifier;
    // console.log(data?.[id]);
    const table = ["SL.No", "NameoftheFaculty", "Designation", "Position", "MobileNumber", "E-mailAddress"];
    let tableType = ["SL.No", "Name of the Faculty", "Designation", "Position", "Mobile Numer", "E-mail Address"];
    // console.log(tableType);
    //console.log(data?.[id].Name);
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
                        //  console.log(`Item at index ${index}:`, item), //index is number 0 and item is single name and designation
                        <tr className={styles.tr} key={index}>
                            {table && table.map((header, headerIndex) => (
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
export default async function antiragging() {
    const data = await featch();
   // console.log(data, "gotta");
    // console.log(data, "heimana")
    return (
        <>
            <section className={styles.section}>
                <div className={styles.content}>
                    <p className={styles.headline}>{data.Title}</p>
                    <div className={styles.title}>
                    </div>
                    <div className={styles.group}>
                        <div >
                            <p className={styles.description}>{data.title}</p>
                        </div>
                        <div className={styles.contect}>
                            {data.AntiRagging}<br />
                            {data.Number}<br />
                            {data.Mailiid}
                        </div>
                        <div>
                            <p className={styles.headline}>{data.Headline}</p>
                            <p className={styles.description}>{data.Description}</p>
                        </div>
                        <div>
                            <p className={styles.heading}> {data.Heading}</p>
                            <Listsetter className={styles.li} data={data} list={'headingList'} />
                        </div>
                        <div>
                            <p className={styles.heading}>{data.heading2}</p>
                            <p className={styles.description}>
                                {data.heading2Description}</p>
                            <Listsetter data={data} list={'heading2List'} />
                        </div>

                        <p className={styles.heading}>
                            {data.heading3}</p>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <MembersTable data={data} identifier={'CollegeMembers'} />
                            </div>
                        </div>
                        <p className={styles.heading}>{data.heading4}</p>
                        <div className={styles.container}>
                            <div className={styles.table} >
                                <MembersTable data={data} identifier={'SquadMembers'} />
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
