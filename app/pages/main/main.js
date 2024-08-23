import DOMPurify from "isomorphic-dompurify";
import getStaticProps from "@/app/components/getdata";
import styles from "@/app/Styles/main.module.css";
import Link from "next/link";
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
async function MainPage() {
  const data = await featch();
  console.log(data.page, "gotta");
  //console.log(data, "heimana");
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <div className={styles.welcome}>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.title),
                }}
              />
            </div>
            <div className={styles.content}>
              <p
                className={styles.p}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.description),
                }}
              />
              <p
                className={styles.p}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.description2),
                }}
              />
            </div>
            <div className={styles.board}>
              <div className={styles.recognition}>
                <p
                  className={styles.p}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.Recognition),
                  }}
                />
              </div>
              <div className={styles.dte}>
                <p
                  className={styles.p}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.SubRecognition),
                  }}
                />
              </div>
              <div className={styles.grievance}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.GrievanceTitle),
                  }}
                />{" "}
                <a className={styles.Link} href={data.GrievanceLink}>CLICK HERE</a>
              </div>
              <div className={styles.disclosure}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.MandatoryTitle),
                  }}
                />{" "}
                <a className={styles.Link} href={data.MandatoryLink}>CLICK HERE</a>
              </div>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.mission}>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.MissionTitle),
                }}
              />
            </div>
            <div className={styles.missionText}>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.MissionDescription),
                }}
              />
            </div>
            <div className={styles.vision}>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.VisionTitle),
                }}
              />
            </div>
            <div className={styles.visionText}>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(data.VisionDescription),
                }}
              />
            </div>
            <div className={styles.offers}>
              <div className={styles.offersTitle}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data.CoursesTitle),
                  }}
                />
              </div>
              <div className={styles.coursesList}>
                <Link
                  key={"course1"}
                  href={"http://www.google.com"}
                  className={styles.courseLink}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.CoursesOne),
                    }}
                  />
                </Link>
                <Link
                  key={"course2"}
                  href={"http://www.google.com"}
                  className={styles.courseLink}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.CoursesTwo),
                    }}
                  />
                </Link>
                <Link
                  key={"course3"}
                  href={"http://www.google.com"}
                  className={styles.courseLink}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.CoursesThree),
                    }}
                  />
                </Link>
                <Link
                  key={"course4"}
                  href={"http://www.google.com"}
                  className={styles.courseLink}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(data.CorusesFoure),
                    }}
                  />
                </Link>
              </div>
              <div>
                <img
                  className={styles.image}
                  src="./needed/ragging-free-logo.png"
                  alt="Ragging-logo"
                />
                <span className={styles.Ragginglink}>
                  For Anti-Ragging Committee list &nbsp;
                  <Link
                    key={"AntiRagging"}
                    href={"/AntiRagging"}
                    className={styles.Link}
                  >
                   Click here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { MainPage };
