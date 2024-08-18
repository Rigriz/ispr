import { MongoClient } from "mongodb";
//import "dotenv/config";
async function getStaticProps() {
  try {
    /*const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    console.log("Connected successfully to MongoDB");
    const db = client.db(process.env.DB_NAME);
    const cursor = db
      .collection(process.env.WEB_CONTENT)
      .find({}, { projection: { _id: 0 } });*/
      
    //const documents = await cursor.toArray();
    // console.log(documents, "Fetched documents from MongoDB");
    /*const jsonData = documents.map((doc) => JSON.stringify(doc));
    const json = JSON.parse(JSON.stringify(documents));*/
    //console.log(json, "Transformed JSON data");
    //await client.close();
    // Transform array into an object with unique field as keys
    const documents =[{
      "_id": {
        "$oid": "66a72a45305c1474d56b4288"
      },
      "page": "Home",
      "title": "Welcome to Indira Shiva Rao Polytechnic",
      "description": "Indira &nsp;Shiva Rao Polytechnic is an institution run by <b>Sri Krishna Shikshana Prathisthana Trust, Sri Krishnapura Mutt,</b> Car Street, Udupi, Under the able guidance of Sri Sri Vidyasagara Theertha Swamiji, who is the President of the Trust. The polytechnic started functioning in the year 1997 as the first and only Private Women’s Polytechnic in the entire undivided Dakshina Kannada district. Due to popular demand from the parents for admission of boys, it was subsequently converted into a co-ed polytechnic in the year 1999",
      "MissionTitle": "Mission",
      "MissionDescription": "To work with utmost will and determination for achieving overall personality development and intellectual growth of the students with effective deployment and management of best educational & infrastructural facilities.",
      "VisionTitle": "Vision",
      "VisionDescription": "To establish an excellent, integrated campus for technical education in Udupi district.",
      "CoursesTitle": "The college offers the following courses",
      "CoursesOne": "Computer Science & Engineering",
      "CoursesTwo": "Electronics & Communication Engineering",
      "CoursesThree": "Mechanical Engineering",
      "CorusesFoure": "Apparel Design & Fabrication Technology",
      "Caution": "For Anti-Ragging Committee list",
      "CautionLink": "null",
      "Recognition": "RECOGNITION : Indira Shiva Rao Polytechnic offers Engineering Diploma course of 3 years (6 Semesters) duration, which has been recognized by All India Council for Technical Education (AICTE), New Delhi and the institute is affiliated to Directorate of Technical Education (DTE), Bengaluru.",
      "SubRecognition": "The Board of Technical Examinations (BTE), Bengaluru under Directorate of Technical Education (DTE), Govt. of Karnataka conducts all the exams and issues Diploma certificates at the end of the course",
      "GrievanceTitle": "FOR GRIEVANCE CELL",
      "GrievanceLink": "null",
      "MandatoryTitle": "FOR Mandatory Disclosure",
      "MandatoryLink": "null",
      "description2": "The polytechnic started functioning in the year 1997 as the first and only Private Women’s Polytechnic in the entire undivided Dakshina Kannada district. Due to popular demand from the parents for admission of boys, it was subsequently converted into a co-ed polytechnic in the year 1999."
    },
    {
      "_id": {
        "$oid": "66ba4b850b1cec705e609ed6"
      },
      "page": "Aboutus",
      "TrustMembertitle": "From the Principals Desk............",
      "Paragraph1": "As you may be aware, our polytechnic started functioning in the year 1997 as the first and only private Women’s Polytechnic in the entire undivided Dakshina Kannada district. Due to popular demand from the parents for admission of boys, it was subsequently converted into a co-ed polytechnic in the year 1999. Indira Shiva Rao Polytechnic is a unit of Sri Krishna Shikshana Prathisthana Trust, Krishnapur Mutt, Udupi, which is ably presided by his holiness Sri Sri Vidyasagara Theertha pontiff of Sri Krishnapur Mutt, Udupi, who is the visionary behind starting this polytechnic.",
      "paragraph2": "With the past 27 years of fruitful and dedicated service, Indira Shiva Rao Polytechnic has blossomed into an Institution par excellence and is striving hard to play a significant role in developing well trained and disciplined human resource to serve the nation in the Engineering and Technology segment of our Economy.",
      "paragraph3": "We are fully aware that the reputation and the success earned over the bygone years is not by any magic, but earned in a hard way, owing to the undeterred commitment of the Trustees of Sri Krishna Shikshana Prathisthana Trust, members of the Governing council of the college and the wholehearted support and contributions of our staff members.",
      "paragraph4": "Right from the year of Inception, the Management laid great emphasis on building of character and discipline in students in addition to imparting knowledge & skills in Engineering and Technology, with the aim of developing them into wholesome personalities.",
      "paragraph5": "This always has left us with a humble feeling that we are instrumental in giving the best citizens and Engineers to our society and the country at large.",
      "paragraph6": "It is a fact that Rapid Technical advances and Industrial growth has put tremendous pressure on the Institutions of higher learning like ours, which has called for a close interaction of the institute with the Industries on one end and the monitering bodies [Department of Technical Education, Karnataka and All India Council for Technical Education, New Delhi] in meeting the  increasing demand for well trained and disciplined Engineers.",
      "paragraph7": "Accordingly, and in view of extending the vision of establishing an excellent, integrated campus for technical education in Udupi district, the polytechnic has been now shifted to spacious (10.75 acre) campus behind “Rajathadri” (New D.C.Office), at Manipal, and the academic activities  for the year 2019-20 have been started at the new campus from 01.07.2019.",
      "paragraph8": "We at Indira Shiva Rao Polytechnic as in the past are always ready to accept all oncoming challenges in the year to come and continue to excel in delivering quality education to our students, there by fulfilling our obligation to the national development.",
      "Footerplace": "Udupi",
      "FooterPrincipl": "Mr.Srinath Nayak <br/> Principal"
    },
    {
      "_id": {
        "$oid": "66ba4b850b1cec705e609ed7"
      },
      "page": "SriKrishnaShikshanaPrathisthanaTrust",
      "title": "Sri Krishna Shikshana Prathisthana Trust is promoted by Sri Krishnapura Mutt, Car Street, Udupi. Presently, the Trust is having the following members:",
      "trustMembers": [
        {
          "Name": "Sri Sri Vidyasagara Theertha Swamiji Mathadhipathi, Sri Krishnapura Mutt, Car Street, Udupi",
          "Designation": "President"
        },
        {
          "Name": "Sri Shreesha Acharya Ex-Principal, M. G. M. College, Udupi",
          "Designation": "Secretary"
        },
        {
          "Name": "Sri B. Ramananda Rao, B.E, .Executive Engineer, MESCOM",
          "Designation": "Member"
        },
        {
          "Name": "Sri U. K. Raghavendra Rao, B.E. Civil Engineer & Valuer, Udupi",
          "Designation": "Member"
        },
        {
          "Name": "Sri H. K. V. Rao, B.Tech, M.Tech Retired Professor, M. I. T., Manipal",
          "Designation": "Member"
        },
        {
          "Name": "Sri U. Ramesh Rao, B.E. Civil Engineer & Vastu Consultant, Udupi",
          "Designation": "Member"
        },
        {
          "Name": "Dr. Mohandas Bhat S, B.E., M.E., Ph.D., Retired Professor, M S Ramaiah Institute of Technology, Bengaluru",
          "Designation": "Member"
        },
        {
          "Name": "Sri Madhvapathi, B.E. Electrical Engineer, Udupi",
          "Designation": "Member"
        },
        {
          "Name": "Sri B. RAMAMOORTHY RAO, Retired Mechanical Engineer M/s Arcelor Mittal & M/s Essar Steel India Ltd.",
          "Designation": "Member"
        }
      ],
      "GoverningCouncilTitle": "The current Governing Council as constituted by Sri Krishna Shikshana Prathisthana Trust is as follows:",
      "GoverningMembers": [
        {
          "Name": "Sri U. K. Raghavendra Rao, B.E. Civil Engineer & Valuer, Udupi",
          "Designation": "President / Convener"
        },
        {
          "Name": "Sri Shreesha Acharya, M.A., Ex-Principal, M. G. M. College, Udupi",
          "Designation": "Member"
        },
        {
          "Name": "Sri Madhvapathi, B.E. Electrical Engineer, Udupi",
          "Designation": "Assistant Administrative Officer"
        },
        {
          "Name": "Sri U. Ramesh Rao, B.E. Civil Engineer & Vastu Consultant, Udupi",
          "Designation": "Member"
        },
        {
          "Name": "Dr. Mohandas Bhat S, B.E., M.E., Ph.D., Retired Professor, M S Ramaiah Institute of Technology, Bengaluru",
          "Designation": "Member"
        },
        {
          "Name": "Sri H. K. V. Rao, B.Tech, M.Tech Retired Professor, M. I. T., Manipal",
          "Designation": "Member"
        },
        {
          "Name": "Mr.Srinath Nayak, B.E, M. Tech. Principal, Indira Shiva Rao Polytechnic",
          "Designation": "Member - Principal"
        }
      ],
      "FacultyTitle": {
        "title": "LIST OF FACULTY AND DATA:",
        "CSETitle": "A. COPMUTER SCIENCE & ENGG DEPT:",
        "ECTitle": "B. ELECTRONICS & COMMUNICATION DEPT:",
        "ADFTTitle": "C. Apparel Design & Fabrication Technology  DEPT:",
        "MECTitle": "D. MECHANICAL ENGG. DEPT:"
      },
      "CSEFaculties": [
        {
          "Name": "Mrs. Sonal Fernandes",
          "Designation": "H.O.D",
          "Qualification": "B.E , M.Tech"
        },
        {
          "Name": "Mrs. Lavanya R",
          "Designation": "Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Mrs. Shwetha P.",
          "Designation": "Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Mrs. Asha V.",
          "Designation": "Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Ms.Bhagyashree",
          "Designation": "Asst.Lecturer",
          "Qualification": "Diploma"
        }
      ],
      "ECFaculties": [
        {
          "Name": "Mr.Srinath Nayak",
          "Designation": "Principal",
          "Qualification": "B.E , M.Tech"
        },
        {
          "Name": "Mr. Hamsaraja N",
          "Designation": "HOD",
          "Qualification": "B.E , M.Tech"
        },
        {
          "Name": "Mr. Manoj Tolar",
          "Designation": "Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Mrs. Mamatha K.S",
          "Designation": "Lecturer",
          "Qualification": "B.E , M.Tech"
        },
        {
          "Name": "Mrs. Prathvija",
          "Designation": "Junior Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Mrs,Varsha Rao J G",
          "Designation": "Lab Instructor",
          "Qualification": "Diploma"
        },
        {
          "Name": "Mrs. Amitha",
          "Designation": "Lab Instructor",
          "Qualification": "Diploma"
        }
      ],
      "ADFTFaculties": [
        {
          "Name": "Mr. Rajesh Acharya",
          "Designation": "H.O.D.",
          "Qualification": "Diploma"
        },
        {
          "Name": "Mrs. Ashwini Jathan",
          "Designation": "Lecturer",
          "Qualification": "M.Sc."
        },
        {
          "Name": "Mrs. Neetha",
          "Designation": "Asst. Lecturer",
          "Qualification": "Diploma"
        },
        {
          "Name": "Mrs. Krithika",
          "Designation": "Junior Lecturer",
          "Qualification": "B.Sc"
        },
        {
          "Name": "Mrs. Savitha",
          "Designation": "Lab Instructor",
          "Qualification": "Diploma"
        },
        {
          "Name": "Mrs. Shridevi",
          "Designation": "Lab Instructor",
          "Qualification": "Diploma"
        }
      ],
      "MECFaculties": [
        {
          "Name": "Mr. Ravikiran",
          "Designation": "H.O.D",
          "Qualification": "B.E, M.Tech"
        },
        {
          "Name": "Mrs. Sonal Fernandes",
          "Designation": "Lecturer",
          "Qualification": "B.E, M.Tech"
        },
        {
          "Name": "Mr. Shankara",
          "Designation": "Lecturer",
          "Qualification": "B.E, M.Tech"
        },
        {
          "Name": "Mr. Umesh",
          "Designation": "Lecturer",
          "Qualification": "B.E"
        },
        {
          "Name": "Mr. Shashidhar",
          "Designation": "Lab Instructor",
          "Qualification": "Dip.in ME"
        },
        {
          "Name": "Mr. Mark D’Souza",
          "Designation": "Lab Instructor",
          "Qualification": ""
        },
        {
          "Name": "Mr.Gopal Poojary",
          "Designation": "Technician",
          "Qualification": "Dip.in ME"
        }
      ],
      "OfficeFaculties": [
        {
          "Name": "Mrs. Bhavani",
          "Designation": "Office Superintendent"
        },
        {
          "Name": "Mr. Keshava Devadiga",
          "Designation": "Office Clerk"
        },
        {
          "Name": "Mrs. Prameela Nayak",
          "Designation": "Office Clerk"
        },
        {
          "Name": "Ms. Amrutha",
          "Designation": "Office Clerk"
        },
        {
          "Name": "Mr. Sharath",
          "Designation": "Lab Instructor"
        },
        {
          "Name": "Mr. Praveen Nayak",
          "Designation": "Lab Instructor"
        },
        {
          "Name": "Mrs. Jayamala",
          "Designation": "Lab Instructor"
        }
      ]
    }]
    const json = documents.reduce((acc, item) => {
      if (item.page) {
        // Ensure the field exists unique key
        acc[item.page] = item;
      }
      return acc;
    }, {});
    return {
      props: {
        webContent: json, //sending the { json data }
      },
      revalidate: 55000, // revalidate every 400 second
    };
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    return {
      notFound: true,
    };
  }
}
export default getStaticProps;
