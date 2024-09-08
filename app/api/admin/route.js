import { NextResponse, NextApiRequest } from 'next/server';
import { getalldata } from "./getdata";
export async function fetchdata() {
  try {// const client = new MongoClient(process.env.MONGODB_URI);
    //await client.connect();
    //console.log("Connected successfully to MongoDB");
    //const db = client.db(process.env.DB_NAME);
    //const cursor = db
    //  .collection(process.env.WEB_CONTENT)
    //.find({}, { projection: { _id: 0 } });
    //const documents = await cursor.toArray();
    // console.log(documents, "Fetched documents from MongoDB");
    // const jsonData = documents.map((doc) => JSON.stringify(doc));
    // const json = JSON.parse(JSON.stringify(documents));
    //await client.close();
    // Transform array into an object with unique field as keys
  
    const documents = [{
        "page": "Home",
        "title": "Welcome to Indira Shiva Rao Polytechnic.",
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
      }, {
        
        "page": "AntiRagging",
        "Title": "ANTI RAGGING",
        "AntiRagging": "NATIONAL ANTI-RAGGING HELPLINE :",
        "Number": "Phone No. : 1800-180 - 5522",
        "Mailiid": "Email : helpline@antiragging.net",
        "Headline": "ANTI – RAGGING COMMITTEE",
        "Description": "As per the notification of AICTE, New Delhi, institutions of Technical Education all over the country are required to implement the measures under the Prevention and Prohibition of Ragging. Accordingly, we have formed an Anti-Ragging Committee, an Anti-Ragging Squad and other procedures are followed to fulfil the requirements.",
        "Heading": "Ragging constitutes of the following Acts.",
        "headingList": ["Any conduct by any student or students whether by words spoken or by written or by an act which as the effect of teasing, treating or handling with rudeness a fresher or any other student.", "Indulging in rowdy or in disciplined activities by any student or students which causes trouble or physical harm or psychological harm in any fresher or any other student.", "Any act by a senior student that prevents or disturbs the regular academic activity of a fresher.", "Any act of financial extortion of forceful expenditure burden put on a fresher or any student.", "Any act that effects the mental health and self-confidence of a fresher or any other student."],
        "heading2": "Administrative action in the event of Ragging",
        "heading2Description": "The Anti-Ragging committee of the institution shall take an appropriate decision in regard to punishment depending on the facts of each incident and nature of ragging established by the Anti-ragging squad, one or more of the following punishments, namely",
        "heading2List": ["Suspension from attending classes", "With holding/withdrawing scholarships or other benefits", "Debarring from appearing in any test or examination.", "With holding results.", "Cancellation of admission."],
        "heading3": "The list of Members of Anti- Ragging Committee constituted in the college is as below",
        "CollegeMembers": [
          { "NameoftheFaculty": "Mr. HAMSARAJA N", "Designation": "HOD [E&C DEPT]", "Position": "Co-Ordinator", "MobileNumber": "9242261740", "E-mailAddress": "nhamsaraja@gmail.com" },
          { "NameoftheFaculty": "Mr. ASHWINI JATHAN", "Designation": "LECTURER [ADFT DEPT]", "Position": "Member", "MobileNumber": "9482893227", "E-mailAddress": "ashwinipraveen25@gmail.com" },
          { "NameoftheFaculty": "H.K.VISHWANATHA RAO", "Designation": "RETIRED PROFESSOR", "Position": "Member", "MobileNumber": "9480655406", "E-mailAddress": "hkvrao44@gmail.com" }],
        "heading4": "The list of Members of Anti- Ragging Squad constituted in the college is as below:",
        "SquadMembers": [
          { "NameoftheFaculty": "SRINATH", "Designation": "PRINCIPAL", "Position": "Co-Ordinator", "MobileNumber": "9743293148", "E-mailAddress": "srinathnyk@gmail.com" },
          { "NameoftheFaculty": "Mrs. SHWETHA P", "Designation": "Lecturer in CS", "Position": "Member", "MobileNumber": "9901190935", "E-mailAddress": "shwethap1305@gmail.com" },
          { "NameoftheFaculty": "Mrs. REKHA", "Designation": "OFFICE CLERK", "Position": "Member", "MobileNumber": "9449470293", "E-mailAddress": "rekhahegde110@gmail.com" },
          { "NameoftheFaculty": "Mrs. SONAL FERNANDES", "Designation": "H.O.D in CS", "Position": "Member", "MobileNumber": "7259838788", "E-mailAddress": "Sonalf26@gmail.com" }],
        "FooretTitle": "NOTE",
        "FooterDescription": "Students and Staff Members may contact any of the above mentioned Committee/Squad Members to communicate their feedback/complaints on the subject."
      },
      {
      
        "page": "adft",
        "Title": "Apparel Design & Fabrication Technology",
        "list": [
          "Intake of 27 students.",
          "Specialized course that helps to exhibit ones idea about new and special creations.",
          "Curriculum includes subjects on Fibre Science, Fashion Designing, Quality Management, Fabric Designing, Surface Ornamentation, Fashion Illustration etc. CAD Design & pattern making software used in the institute is one of the best and widely used by the International Apparel Industry.",
          "Well-equipped laboratories with state of art power operated machines used in the industry.",
          "Qualified & well experienced staff.",
          "Training in reputed industries.",
          "Regular Participation in National level Fashion shows/Competitions by students.",
          "Free Internet facility for all students (with Digital Library facility).",
          "Innovation Centre/Tinkering Lab facility."
        ],
        "ImageLink": "null"
  
      },
      {
        
        "page": "cse",
        "Title": "Computer Science & Engineering",
        "list": [
          "Intake of 27 students.",
          "Well-equipped laboratories like Data structures Lab, Web Designing, Linux Lab, Multimedia Lab etc.",
          "Laboratories with latest computers.",
          "Free Internet facility for all students (with Digital Library facility).",
          "Qualified and dedicated staff.",
          "Regular Industrial visits and Internships for practical exposure",
          "Innovation Centre/Tinkering Lab facility."
        ],
        "ImageLink": "null"
      },
      {
        
        "page": "mec",
        "Title": "Mechanical Engineering",
        "list": [
          "Intake of 27 students.",
          "Well-equipped laboratories and workshops.",
          "CAD lab with latest software.",
          "Free Internet facility for all students (with Digital Library facility).",
          "Qualified and well experienced staff.",
          "Regular Industrial visits and Internships for practical exposure.",
          "Innovation Centre/Tinkering Lab facility."
        ],
        "ImageLink": "null"
  
      },
      {
        
        "page": "ec",
        "Title": "Electronics & Communication Engineering",
        "list": [
          "Intake of 27 students.",
          "Well-equipped laboratories like Power electronics & PLC, Advanced Microprocessors, VLSI, Analog Electronic Circuits, Digital Electronics, Microcontrollers, Basic Electronics Lab etc.",
          "CAD lab with latest software.",
          "Free Internet facility for all students (with Digital Library facility).",
          "Students encouraged & supported to conduct Regular projects which improve their innovative & practical skills.",
          "Regular Industrial visits and Internships for practical exposure.",
          "Innovation Centre/Tinkering Lab facility."
        ],
        "ImageLink": "null"
  
      }, {
        
        "page": "Facilities",
        "Title": "Facilities",
        "Title2": "Placement Cell:",
        "Description": "Placement cell help students know about the industry they are getting into. The main aim of a placement cell – getting students placed in good companies, where they can start their careers.",
        "heading": "New Campus:",
        "NewCampusDescription": "In view of extending the vision of our President (Sri Sri Vidyasagara Theertha Swamiji) to provide quality technical education to the financially backward but meritorious students of the udupi district and to fulfill all the infrastructure related norms of AICTE, New Delhi, and the academic year 2019-20 has commenced from 01-07-2019 with state of art class rooms, Lab and workshop facilities. We have now shifted to the present 10.75 acre spacious new campus behind “Rajathadri”, (New D.C. Office), at Manipal on the Sheembra Ganapathi Temple Road, Perampally, Udupi.",
        "heading2": "Library",
        "LibraryList": [
          "Our college has a well-equipped library for the benefit of staff and students.",
          "Presently, over 8154 Technical and Non-Technical books covering all the subjects taught at Diploma level are available.",
          "The library also subscribes to leading Technical magazines and Journals (Course wise).",
          "Book Bank facility is available in the library for the use of students.",
          "Digital Library facility and Multimedia computers are provided to students to encourage use of Digital medium and internet.",
        ],
        "LibraryListFooter": "Encyclopedia, Dictionary, General Knowledge books, Projects Reports, Bound volumes and Compact Discs are available for reference.",
        "heading3": "Internet Facilities:",
        "heading3desc": "Internet Facility is provided to Students and Staff free of cost, which will help them to gain knowledge and get well versed with the rapid technical advances taking place around the world in their respective fields. A separate Multimedia room consisting of 10 computers with internet facility has been provided for the same.",
        "heading4": "Mentoring:",
        "heading4desc": "Class Teachers monitor and assist the students in Academics and overall development. They also offer counselling to the students having personal, disciplinary or emotional problems thereby making the students to stay focused effectively to the respective courses.",
        "heading5": "Student Scholarships:",
        "heading5desc": "The college arranges scholarships to meritorious students from the following donors.",
        "heading5list": [
          "Indira Shiva Rao Trust, Udupi",
          "Kidiyoor Nagalaxmi Srinivas Public Charitable Trust, Udupi",
          "NSP Scholarship",
          "SSP Scholarship"
        ],
        "heading5Footer": "Donors/Trusts/Alumnus interested to provide scholarships or financial assistance to our students are requested to contact the Principal.",
        "heading6": "Lab Facilities:",
        "heading6desc": "Every department has well equipped laboratories which help the students to gain practical knowledge.",
        "heading7": "Computer Science & Engineering:",
        "heading7desc": "There are 4 sections of Computer Labs with the latest machines. A separate system is provided to every student. Various Labs are Data Structures Lab, Web Designing Lab, Linux Lab, Multimedia Lab etc. which have latest software.",
        "heading8": "Electronics & Communication Engineering:",
        "heading6desc": "Well-equipped laboratories like Power Electronics & PLC, Advanced Microprocessors, VLSI, Analog Electronic Circuits, Digital Electronics, Microcontrollers, Basic Electronics Lab etc. help the students to conduct various experiments and gain more knowledge.",
        "heading7": "Mechanical Engineering:",
        "heading7desc": "Well-equipped workshop includes Machine shop, Welding shop, Sheet Metal shop, Fitting and Carpentry, Foundry Lab, Thermal Lab. Students are trained to work with Lathe machine, Milling machine, Shaper machine, Drilling machine etc. and all kinds of machineries used in Industrial applications.",
        "heading8": "Innovation / Tinkering Lab:",
        "heading8desc": "This is a new addition to the set of labs, where state of art tools are provide & students from all branches are encourages to work on innovative projects/products (small or big) irrespective of course selected.",
        "heading8desc2": "Inter disciplinary products/projects are also promoted where students of different branches form teams and work on a given project. Students right from the first year are motivated to use and work at the Innovation/Tinkering Lab duly guided by faculty members.",
        "heading9": "Apparel Design & Fabrication Technology:",
        "heading9desc": "CAD Design & pattern making software used in the institute is one of the best and widely used by the International Apparel Industry. Well-equipped laboratories have state of the art power operated machines used in the industry.",
        "heading10": "Extra-Curricular Activities:",
        "heading10desc": "Extra-Curricular Activities help in the overall development of a student. Our College gives equal importance to both Academics and Co-curricular activities. Various competitions like Cook without Fire, Best from Waste, Quiz, Singing, Carom, Chess, Drawing, Rangoli etc. in addition to Sports Day, College Day help the students to showcase their hidden talents.",
        "heading11": "Professional Practices Lab:",
        "heading11desc": "Students are trained to give PPT presentations using the Projector, which improves their personality development, Communication skills etc. and sufficient guidance is also given which helps them to face interviews and perform well in the present competitive world with good written and oral communication skills.",
      },
      {
        
        "page": "Grievance",
        "title": "GRIEVANCE REDRESSAL SYSTEM(GRS) AT OUR POLYTECHNIC",
        "description": "As per the guidelines of AICTE, (Gazette notification Dtd: 25th May 2012) we have established an Grievance redressal  System in order to ensure transparency in admissions and with Paramount Objective of preventing unfair  practices and to provide a mechanism to students/parents/staff members for redressal of their grievances .",
        "description1": "Concerned individuals (Students/Parents/Staff members) are requested to call on our college Phone No. 0820-2574049 / 8762070232 or visit our college  office for appointment/details to submit your grievance/feedback. Alternatively they can also visit our online Grievance Redressal System available at our URL - isrpolytechnic.edugrievance.com",
        "Footer": "CLICK HERE FOR GRS OFFICE BEARERS",
        "Footer1": "CLICK HERE  FOR ONLINE GRS PROCEDURE",
      }
    ] 
  
    const json = documents.reduce((acc, item) => {
      if (item.page) {
        // Ensure the field exists unique key
        acc[item.page] = item;
      }
      return acc;
    }, {});
  //  console.log("Transformed JSON data");
    return (documents);
  } catch (err) {
    console.error("Error fetching data from MongoDB", err);
    return {
      notFound: true,
    };
  }
}
export async function GET() {
  const data = await fetchdata();
  return NextResponse.json({data});
}