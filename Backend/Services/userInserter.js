import bcrypt from 'bcrypt';
import { teacherAccount, teacherUnhashedAccount } from '../Models/teacherAccountModel.js';
import { studentAccount, studentUnhashedAccount } from '../Models/studentAccountModel.js';

const saltRounds = 10;

export const insertTeacherIfNotExist = async () => {
  try {
    const existingTeacher = await teacherAccount.findAll();

    if (existingTeacher.length === 0) {
      const password = "testtest";
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const teacherData = {
        teacherNumber: 1,
        first_name: "Testtest",
        middle_name: "Testtest",
        last_name: "Testtest",
        email: "testtest@gmail.com",
        phoneNumber: "099999999",
        password: hashedPassword,
      };

      await teacherAccount.create(teacherData);

      await teacherUnhashedAccount.create({
        userId: teacherData.teacherNumber, 
        teacherNumber: teacherData.teacherNumber,
        email: teacherData.email,
        password: password, 
      });

      console.log("Teacher inserted successfully in both tables.");
    } else {
      console.log("Teacher already exists, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Teacher:", error);
  }
};

export const insertStudentIfNotExist = async () => {
  try {
    const existingTeacher = await studentAccount.findAll();

    if (existingTeacher.length === 0) {
      const password = "Crocodillo";
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const studentData = {
        userId: 1,
        studentNumber: "20236969-N",
        cardNumber: "b5b9b5",
        first_name: "Matthew",
        middle_name: "Gabo",
        last_name: "Crocodillo",
        course: "BSIT",
        year:  "2",
        section: "C",
        role: "Student",
        email: "matthewgabocrocodillo@gmail.com",
        phoneNumber: "099999999",
        password: hashedPassword,
      };

      await studentAccount.create(teacherData);

      await studentUnhashedAccount.create({
        userId: studentData.teacherNumber, 
        email: studentData.email,
        password: password, 
      });

      console.log("Students inserted successfully in both tables.");
    } else {
      console.log("Students already exists, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Students:", error);
  }
};