import getStaticProps from "./getdata";
import styles from "../Styles/main.module.css";
async function featch() {
  try {
    const data = await getStaticProps();
    return data.props.webContent.Home; //Return the homepage content on success
  } catch (error) {
    console.error(
      "Error retrieving data from MongoDB getDataFromMongo:",
      error,
    );
    return { error: error.message }; // Return an error object on failure
  }
}
async function aboutPage() {
  const data = await featch();
  console.log(data, "heimana");
  return (
    <>
      <div>
        <div className={styles.mainContainer}>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>Paragraph 1 content goes here.</p>
            <p className={styles.paragraph}>Paragraph 2 content goes here.</p>
            <p className={styles.paragraph}>Paragraph 3 content goes here.</p>
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="./PRINCIPAL-PHOTO.jpg"
              alt="Description of the image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export { aboutPage };
