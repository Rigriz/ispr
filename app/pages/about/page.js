import DOMPurify from "isomorphic-dompurify";
import styles from "@/app/Styles/about.module.css";
import featchData from "../api/fetchdata";

async function featch() {
    try {
        const data = await featchData("Aboutus");
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
export default async function about() {
  const data = await featch();
  // console.log(data, "heimana");
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.TrustMembertitle),
        }} />
        <div className={styles.webContent}>
          <div className={styles.mainContent}>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.Paragraph1),
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.paragraph2),
              }}
            />
          </div>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src="./needed/PRINCIPAL-PHOTO.jpg"
              alt="Description of the image"
            />
          </div>
        </div>
        <div className={styles.textContent}>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph3),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph2),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph3),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph4),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph5),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph6),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.paragraph7),
            }}
          />
        </div>
        <div className={styles.footer}>
          <div className={styles.place}>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.Footerplace),
              }}
            />
          </div>
          <div className={styles.principle}>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.FooterPrincipl),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}