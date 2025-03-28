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
          subject_code: "IT 102",
          name: "Advanced Database Systems",
          description: "-",
        },
        {
          subject_code: "CCS 106",
          name: "Applications Development and Emerging Technologies",
          description: "-",
        },
        {
          subject_code: "IT 103",
          name: "Computer System Organization",
          description: "-",
        },
        {
          subject_code: "IT 101",
          name: "Integrative Programming and Technologies",
          description: "-",
        },
        { subject_code: "IT 104", name: "Networking 2", description: "-" },
        {
          subject_code: "GEC 007",
          name: "Science, Technology & Society",
          description: "-",
        },
        {
          subject_code: "PATHFIT 4",
          name: "Sports and Fitness",
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
      const Course = [
        {
          Room1_id: 1,
          Subjects: "IT 102",
          Day: "Monday",
          Time_In: "13:00",
          Time_Out: "14:01",
        },
        {
          Room1_id: 2,
          Subjects: "CCS 106",
          Day: "Tuesday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
        {
          Room1_id: 3,
          Subjects: "IT 103",
          Day: "Wednesday",
          Time_In: "21:00",
          Time_Out: "21:01",
        },
        {
          Room1_id: 4,
          Subjects: "IT 101",
          Day: "Thursday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
        {
          Room1_id: 5,
          Subjects: "GEC 007",
          Day: "Friday",
          Time_In: "21:00",
          Time_Out: "21:01",
        },
        {
          Room1_id: 6,
          Subjects: "PATHFIT 4",
          Day: "Saturday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
      ];

      await Room1.bulkCreate(Course);
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
      const Course = [
        {
          Room1_id: 1,
          Subjects: "GEC 007",
          Day: "Monday",
          Time_In: "21:00",
          Time_Out: "21:01",
        },
        {
          Room1_id: 2,
          Subjects: "PATHFIT 4",
          Day: "Monday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
      ];

      await Room2.bulkCreate(Course);
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
      const Course = [
        {
          Room1_id: 1,
          Subjects: "GEC 007",
          Day: "Monday",
          Time_In: "21:00",
          Time_Out: "21:01",
        },
        {
          Room1_id: 2,
          Subjects: "PATHFIT 4",
          Day: "Monday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
      ];

      await Room3.bulkCreate(Course);
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
      const Course = [
        {
          Room1_id: 1,
          Subjects: "GEC 007",
          Day: "Monday",
          Time_In: "21:00",
          Time_Out: "21:01",
        },
        {
          Room1_id: 2,
          Subjects: "PATHFIT 4",
          Day: "Monday",
          Time_In: "21:05",
          Time_Out: "22:00",
        },
      ];

      await Room4.bulkCreate(Course);
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
