import SubjectModel from "../Models/subjectsModel.js";
import SectionModel from "../Models/sectionModel.js";
import CourseModel from "../Models/courseModel.js";
import Banned from "../Models/bannedModel.js";
import Room1 from "../Models/room1Model.js";
import Room2 from "../Models/room2Model.js";
import Room3 from "../Models/room3Model.js";
import Room4 from "../Models/room4Model.js";
import Day from "../Models/dayModel.js";

export const insertSubjectIfNotExist = async () => {
  try {
    const existingSubject = await SubjectModel.findAll();

    if (existingSubject.length === 0) {
      const subjects = [
        {
          subject_code: "CCS 101",
          name: "Introduction to Computing",
          description: "-",
        },
        {
          subject_code: "CCS 102",
          name: "Computer Programming 1",
          description: "-",
        },
        {
          subject_code: "CCS 109",
          name: "Business Application Software",
          description: "-",
        },
        {
          subject_code: "PATHFIT 1",
          name: "Movement Competency Training",
          description: "-",
        },
        {
          subject_code: "NSTP 1",
          name: "NSTP 1",
          description: "-",
        },
        {
          subject_code: "CCS 103",
          name: "Computer Programming 2",
          description: "-",
        },
        {
          subject_code: "CCS 107",
          name: "Web Systems and Technology",
          description: "-",
        },
        {
          subject_code: "CCS 108",
          name: "Technical Computer Concept",
          description: "-",
        },
        {
          subject_code: "PATHFIT 2",
          name: "Exerccise-Based Fitness Activities",
          description: "-",
        },
        {
          subject_code: "NSTP 2",
          name: "NSTP 2",
          description: "-",
        },
        {
          subject_code: "PR 001",
          name: "College Algebra",
          description: "-",
        },
        {
          subject_code: "GEC 003",
          name: "Contemporary World",
          description: "-",
        },
        {
          subject_code: "CCS 104",
          name: "Data Structures and Algorithms",
          description: "-",
        },
        {
          subject_code: "CCS 105",
          name: "Information Management",
          description: "-",
        },
        {
          subject_code: "CCS 110",
          name: "Digital Graphics",
          description: "-",
        },
        {
          subject_code: "CCS 117",
          name: "Networking 1",
          description: "-",
        },
        {
          subject_code: "CCS 124",
          name: "Discrete Mathematics",
          description: "-",
        },
        {
          subject_code: "PATHFIT 3",
          name: "Dance and Fitness",
          description: "-",
        },
        {
          subject_code: "GEC 005",
          name: "Purposive Communication",
          description: "-",
        },
        {
          subject_code: "LIT 001",
          name: "Philippine Literature",
          description: "-",
        },
        {
          subject_code: "CCS 106",
          name: "Application Development and Emerging Technologies",
          description: "-",
        },
        {
          subject_code: "IT 101",
          name: "Integrative Programming and Technologies 1",
          description: "-",
        },
        {
          subject_code: "IT 102",
          name: "Advance Database Systems",
          description: "-",
        },
        {
          subject_code: "IT 103",
          name: "Computer System Organization",
          description: "-",
        },
        {
          subject_code: "IT 104",
          name: "Networking 2",
          description: "-",
        },
        {
          subject_code: "PATHFIT 4",
          name: "Sports and Fitness",
          description: "-",
        },
        {
          subject_code: "Science Technology and Society",
          name: "GEC 007",
          description: "-",
        },
        {
          subject_code: "CCS 111",
          name: "System Analysis and Design",
          description: "-",
        },
        {
          subject_code: "CCS 113",
          name: "Information Assurance and Security 1",
          description: "-",
        },
        {
          subject_code: "CCS 116",
          name: "Advanced Web System",
          description: "-",
        },
        {
          subject_code: "CCS 118",
          name: "Multimedia Systems",
          description: "-",
        },
        {
          subject_code: "IT 105",
          name: "IT Major Elective 1 (Digital Animation)",
          description: "-",
        },
        {
          subject_code: "IT 106",
          name: "Logic Design and Switching",
          description: "-",
        },
        {
          subject_code: "PR 002",
          name: "Probability and Statistics",
          description: "-",
        },
        {
          subject_code: "CCS 112",
          name: "Operating System & Application",
          description: "-",
        },
        {
          subject_code: "CCS 123",
          name: "Introduction to Human Computer Interaction 1",
          description: "-",
        },
        {
          subject_code: "CCS 125",
          name: "Software Engineering",
          description: "-",
        },
        {
          subject_code: "IT 107",
          name: "System Administration and Maintenance",
          description: "-",
        },
        {
          subject_code: "IT 108",
          name: "Information Assurance and Security 2",
          description: "-",
        },
        {
          subject_code: "IT 109",
          name: "IT Major Elective 2 (Arduino Programming)",
          description: "-",
        },
        {
          subject_code: "PR 003",
          name: "Methods of Research",
          description: "-",
        },
      ];

      await SubjectModel.bulkCreate(subjects);
      console.log("Subjects inserted successfully");
    } else {
      console.log("Subjects already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting subjects:", error);
  }
};

export const insertSectionIfNotExist = async () => {
  try {
    const existingSection = await SectionModel.findAll();

    if (existingSection.length === 0) {
      const Section = [
        {
          name: "-",
          year: "1",
          section: "A",
          description: "-",
        },
        {
          name: "-",
          year: "2",
          section: "B",
          description: "-",
        },
        {
          name: "-",
          year: "3",
          section: "C",
          description: "-",
        },
        {
          name: "-",
          year: "4",
          section: "D",
          description: "-",
        },
      ];

      await SectionModel.bulkCreate(Section);
      console.log("Section inserted successfully");
    } else {
      console.log("Section already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Section:", error);
  }
};

export const insertCourseIfNotExist = async () => {
  try {
    const existingSection = await CourseModel.findAll();

    if (existingSection.length === 0) {
      const Course = [
        {
          Course_code: "-",
          name: "BSIT",
          description: "Bachelor of Science in Information Technology",
        },
        {
          Course_code: "-",
          name: "BSCS",
          description: "Bachelor of Science in Computer Science",
        },
        {
          Course_code: "-",
          name: "BSIS",
          description: "Bachelor of Science in Information Systems",
        },
        {
          Course_code: "-",
          name: "BSEMC",
          description:
            "Bachelor of Science in Entertainment and Multimedia Computing",
        },
      ];

      await CourseModel.bulkCreate(Course);
      console.log("Course inserted successfully");
    } else {
      console.log("Course already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Course:", error);
  }
};

export const insertBannedIfNotExist = async () => {
  try {
    const existingSection = await Banned.findAll();

    if (existingSection.length === 0) {
      const Course = [
        {
          Banned_id: 1,
          Banned_hex: "3e8d402",
        },
      ];

      await Banned.bulkCreate(Course);
      console.log("Banned List inserted successfully");
    } else {
      console.log("Banned List  already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Banned List :", error);
  }
};

export const insertRoom1IfNotExist = async () => {
  try {
    const existingSection = await Room1.findAll();

    if (existingSection.length === 0) {
      const room1_subs = [
        {
          Room1_id: 1,
          Subjects: "CCS 101",
          teacher: "3",
          Day: "Monday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room1_id: 2,
          Subjects: "PATHFIT 1",
          teacher: "5",
          Day: "Tuesday",
          Time_In: "10:30",
          Time_Out: "24:30",
        },
        {
          Room1_id: 3,
          Subjects: "CCS 103",
          teacher: "2",
          Day: "Wednesday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room1_id: 4,
          Subjects: "GEC 003",
          teacher: "1",
          Day: "Thursday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
        {
          Room1_id: 5,
          Subjects: "IT 101",
          teacher: "4",
          Day: "Friday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room1_id: 6,
          Subjects: "CCS 106",
          teacher: "3",
          Day: "Saturday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
        {
          Room1_id: 7,
          Subjects: "PATHFIT 2",
          teacher: "2",
          Day: "Sunday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room1_id: 8,
          Subjects: "IT 102",
          teacher: "5",
          Day: "Monday",
          Time_In: "15:30",
          Time_Out: "24:30",
        },
        {
          Room1_id: 9,
          Subjects: "CCS 107",
          teacher: "1",
          Day: "Tuesday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room1_id: 10,
          Subjects: "GEC 005",
          teacher: "4",
          Day: "Wednesday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
      ];

      await Room1.bulkCreate(room1_subs);
      console.log("Room1 inserted successfully");
    } else {
      console.log("Room1 already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Room1 List :", error);
  }
};

export const insertRoom2IfNotExist = async () => {
  try {
    const existingSection = await Room2.findAll();

    if (existingSection.length === 0) {
      const room2_subs = [
        {
          Room2_id: 1,
          Subjects: "CCS 102",
          teacher: "2",
          Day: "Monday",
          Time_In: "07:30",
          Time_Out: "09:30",
        },
        {
          Room2_id: 2,
          Subjects: "IT 104",
          teacher: "4",
          Day: "Tuesday",
          Time_In: "10:00",
          Time_Out: "12:00",
        },
        {
          Room2_id: 3,
          Subjects: "GEC 003",
          teacher: "1",
          Day: "Wednesday",
          Time_In: "13:30",
          Time_Out: "15:30",
        },
        {
          Room2_id: 4,
          Subjects: "PATHFIT 1",
          teacher: "5",
          Day: "Thursday",
          Time_In: "16:00",
          Time_Out: "18:00",
        },
        {
          Room2_id: 5,
          Subjects: "CCS 117",
          teacher: "3",
          Day: "Friday",
          Time_In: "08:30",
          Time_Out: "10:30",
        },
        {
          Room2_id: 6,
          Subjects: "IT 106",
          teacher: "2",
          Day: "Saturday",
          Time_In: "11:00",
          Time_Out: "13:00",
        },
        {
          Room2_id: 7,
          Subjects: "CCS 108",
          teacher: "4",
          Day: "Sunday",
          Time_In: "14:30",
          Time_Out: "16:30",
        },
        {
          Room2_id: 8,
          Subjects: "PR 002",
          teacher: "1",
          Day: "Monday",
          Time_In: "09:00",
          Time_Out: "12:00",
        },
        {
          Room2_id: 9,
          Subjects: "NSTP 2",
          teacher: "5",
          Day: "Tuesday",
          Time_In: "12:30",
          Time_Out: "14:30",
        },
        {
          Room2_id: 10,
          Subjects: "CCS 124",
          teacher: "3",
          Day: "Wednesday",
          Time_In: "15:00",
          Time_Out: "17:00",
        },
      ];

      await Room2.bulkCreate(room2_subs);
      console.log("Room2 inserted successfully");
    } else {
      console.log("Room2 already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Room2 List :", error);
  }
};

export const insertRoom3IfNotExist = async () => {
  try {
    const existingSection = await Room3.findAll();

    if (existingSection.length === 0) {
      const room3_subs = [
        {
          Room3_id: 1,
          Subjects: "CCS 112",
          teacher: "2",
          Day: "Sunday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room3_id: 2,
          Subjects: "PATHFIT 4",
          teacher: "3",
          Day: "Monday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
        {
          Room3_id: 3,
          Subjects: "CCS 113",
          teacher: "5",
          Day: "Tuesday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Roo31_id: 4,
          Subjects: "IT 106",
          teacher: "1",
          Day: "Wednesday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
        {
          Room3_id: 5,
          Subjects: "CCS 116",
          teacher: "4",
          Day: "Thursday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room3_id: 6,
          Subjects: "PR 001",
          teacher: "2",
          Day: "Friday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
        {
          Room3_id: 7,
          Subjects: "CCS 117",
          teacher: "3",
          Day: "Saturday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room3_id: 8,
          Subjects: "IT 107",
          teacher: "5",
          Day: "Sunday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
        {
          Room3_id: 9,
          Subjects: "CCS 118",
          teacher: "1",
          Day: "Monday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room3_id: 10,
          Subjects: "PR 002",
          teacher: "4",
          Day: "Tuesday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
      ];
      await Room3.bulkCreate(room3_subs);
      console.log("Room3 inserted successfully");
    } else {
      console.log("Room3 already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Room3 List :", error);
  }
};

export const insertRoom4IfNotExist = async () => {
  try {
    const existingSection = await Room4.findAll();

    if (existingSection.length === 0) {
      const room4_subs = [
        {
          Room4_id: 1,
          Subjects: "CCS 123",
          teacher: "2",
          Day: "Wednesday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room4_id: 2,
          Subjects: "IT 108",
          teacher: "3",
          Day: "Thursday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
        {
          Room4_id: 3,
          Subjects: "CCS 124",
          teacher: "5",
          Day: "Friday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room4_id: 4,
          Subjects: "LIT 001",
          teacher: "1",
          Day: "Saturday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
        {
          Room4_id: 5,
          Subjects: "CCS 125",
          teacher: "4",
          Day: "Sunday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room4_id: 6,
          Subjects: "IT 109",
          teacher: "2",
          Day: "Monday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
        {
          Room4_id: 7,
          Subjects: "PR 003",
          teacher: "3",
          Day: "Tuesday",
          Time_In: "13:00",
          Time_Out: "15:00",
        },
        {
          Room4_id: 8,
          Subjects: "NSTP 1",
          teacher: "5",
          Day: "Wednesday",
          Time_In: "15:30",
          Time_Out: "17:30",
        },
        {
          Room4_id: 9,
          Subjects: "CCS 108",
          teacher: "1",
          Day: "Thursday",
          Time_In: "08:00",
          Time_Out: "10:00",
        },
        {
          Room4_id: 10,
          Subjects: "NSTP 2",
          teacher: "4",
          Day: "Friday",
          Time_In: "10:30",
          Time_Out: "12:30",
        },
      ];

      await Room4.bulkCreate(room4_subs);
      console.log("Room4 inserted successfully");
    } else {
      console.log("Room4 already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Room4 List :", error);
  }
};

export const insertDayIfNotExist = async () => {
  try {
    const existingSection = await Day.findAll();

    if (existingSection.length === 0) {
      const Course = [
        {
          Room1_id: 1,
          Day: "Monday",
        },
        {
          Room1_id: 2,
          Day: "Tuesday",
        },
        {
          Room1_id: 3,
          Day: "Wednesday",
        },
        {
          Room1_id: 4,
          Day: "Thursday",
        },
        {
          Room1_id: 5,
          Day: "Friday",
        },
        {
          Room1_id: 6,
          Day: "Saturday",
        },
        {
          Room1_id: 7,
          Day: "Sunday",
        },
      ];

      await Day.bulkCreate(Course);
      console.log("Day inserted successfully");
    } else {
      console.log("Day already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Day List :", error);
  }
};
