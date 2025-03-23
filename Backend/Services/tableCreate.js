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
    console.log("Student Unhashed Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student Unhashed Account table", error);
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
    console.log("Teacher Unhashed Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Teacher Unhashed Account table", error);
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

export {
  createTableUserAccounts,
  createTableStudentUnhashedccounts,
  createTableTeacherAccounts,
  createTabletTeacherUnhashedccounts,
  createTableSectionTable,
  createTableSubjectTable,
  createTableCourseTable,
};
