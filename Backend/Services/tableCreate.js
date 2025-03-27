import {
  studentAccount,
  studentUnhashedAccount,
} from "../Models/studentAccountModel.js";
import {
  teacherAccount,
  teacherUnhashedAccount,
} from "../Models/teacherAccountModel.js";
import Subject from "../Models/subjectsModel.js";
import Section from "../Models/sectionModel.js";
import Course from "../Models/courseModel.js";
import Attendance from "../Models/attendanceModel.js";
import Banned from "../Models/bannedModel.js";
import Room1 from "../Models/room1Model.js";
import Room2 from "../Models/room2Model.js";
import Room3 from "../Models/room3Model.js";
import Room4 from "../Models/room4Model.js";
import Day from "../Models/dayModel.js";
import studentSubjects from "../Models/studentAccountSubjects.js";

async function createTableUserAccounts() {
  try {
    await studentAccount.sync({ alter: false });
    console.log("Students Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student User Account table", error);
  }
}

async function createTableStudentUnhashedccounts() {
  try {
    await studentUnhashedAccount.sync({ alter: false });
    console.log(
      "Student Unhashed Account table is checked and updated if necessary"
    );
  } catch (error) {
    console.error(
      "Error checking/updating Student Unhashed Account table",
      error
    );
  }
}

async function createTableTeacherAccounts() {
  try {
    await teacherAccount.sync({ alter: false });
    console.log("Teacher Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Teacher User Account table", error);
  }
}

async function createTabletTeacherUnhashedccounts() {
  try {
    await teacherUnhashedAccount.sync({ alter: false });
    console.log(
      "Teacher Unhashed Account table is checked and updated if necessary"
    );
  } catch (error) {
    console.error(
      "Error checking/updating Teacher Unhashed Account table",
      error
    );
  }
}

async function createTableSubjectTable() {
  try {
    await Subject.sync({ alter: false });
    console.log("Subject table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Subject table", error);
  }
}

async function createTableSectionTable() {
  try {
    await Section.sync({ alter: false });
    console.log("Section table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Section table", error);
  }
}

async function createTableCourseTable() {
  try {
    await Course.sync({ alter: false });
    console.log("Section table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Section table", error);
  }
}

async function createTableAttendanceTable() {
  try {
    await Attendance.sync({ alter: false });
    console.log("Attendance table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Attendance table", error);
  }
}

async function createTableBannedTable() {
  try {
    await Banned.sync({ alter: false });
    console.log("Banned table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Banned table", error);
  }
}

async function createTableRoom1Table() {
  try {
    await Room1.sync({ alter: false });
    console.log("Room1 table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Room1 table", error);
  }
}

async function createTableRoom2Table() {
  try {
    await Room2.sync({ alter: false });
    console.log("Room2 table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Room2 table", error);
  }
}

async function createTableRoom3Table() {
  try {
    await Room3.sync({ alter: false });
    console.log("Room3 table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Room3 table", error);
  }
}

async function createTableRoom4Table() {
  try {
    await Room4.sync({ alter: false });
    console.log("Room4 table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Room4 table", error);
  }
}

async function createTableDayTable() {
  try {
    await Day.sync({ alter: false });
    console.log("Day table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Day table", error);
  }
}

async function createTableStudentsSubjectsTable() {
  try {
    await studentSubjects.sync({ alter: false });
    console.log("Students Subject table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student Subject table", error);
  }
}

export {
  createTableUserAccounts,
  createTableStudentUnhashedccounts,
  createTableTeacherAccounts,
  createTabletTeacherUnhashedccounts,
  createTableSectionTable,
  createTableSubjectTable,
  createTableCourseTable,
  createTableAttendanceTable,
  createTableBannedTable,
  createTableRoom1Table,
  createTableRoom2Table,
  createTableRoom3Table,
  createTableRoom4Table,
  createTableDayTable,
  createTableStudentsSubjectsTable,
};
