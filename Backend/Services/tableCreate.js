import {
  userStudentAccount,
  AdminAccount,
} from "../Models/studentAccountModel.js";
import Subject from "../Models/subjectsModel.js";
import Section from "../Models/sectionModel.js";
import Course from "../Models/courseModel.js";

async function createTableUserAccounts() {
  try {
    await userStudentAccount.sync({ alter: false });
    console.log("Students Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Student User Account table", error);
  }
}

async function createTableAdminAccounts() {
  try {
    await AdminAccount.sync({ alter: false });
    console.log("Admin Account table is checked and updated if necessary");
  } catch (error) {
    console.error("Error checking/updating Admin User Account table", error);
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
  createTableAdminAccounts,
  createTableSectionTable,
  createTableSubjectTable,
  createTableCourseTable,
};
