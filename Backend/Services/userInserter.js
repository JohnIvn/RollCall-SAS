import bcrypt from "bcrypt";
import {
  teacherAccount,
  teacherUnhashedAccount,
} from "../Models/teacherAccountModel.js";
import {
  studentAccount,
  studentUnhashedAccount,
} from "../Models/studentAccountModel.js";
import studentSubjects from "../Models/studentAccountSubjects.js";

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
    const saltRounds = 10;
    const existingStudents = await studentAccount.findAll();

    if (existingStudents.length === 0) {
      const passwords = [
        "Crocodillo",
        "Doe123",
        "Smith456",
        "Johnson789",
        "Williams012",
        "Brown345",
        "Jones678",
        "Miller901",
        "Davis234",
        "Garcia567",
      ];

      const courses = ["BSIT", "BSEMC", "BSIS", "BSCS"];

      const hashedPasswords = await Promise.all(
        passwords.map((password) => bcrypt.hash(password, saltRounds))
      );

      const studentData = [
        {
          userId: 1,
          studentNumber: "20236969-N",
          cardNumber: "b5b9b5",
          first_name: "Matthew",
          middle_name: "Gabo",
          last_name: "Crocodillo",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "matthewgabocrocodillo@gmail.com",
          phoneNumber: "099999999",
          password: hashedPasswords[0],
        },
        {
          userId: 2,
          studentNumber: "20231234-N",
          cardNumber: "9d085",
          first_name: "John",
          middle_name: "Middle",
          last_name: "Doe",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "john.doe@example.com",
          phoneNumber: "0987654321",
          password: hashedPasswords[1],
        },
        {
          userId: 3,
          studentNumber: "20232345-N",
          cardNumber: "c4d5e6",
          first_name: "Jane",
          middle_name: "Marie",
          last_name: "Smith",
          course: "BSIS",
          year: "1",
          section: "C",
          role: "Student",
          email: "jane.smith@example.com",
          phoneNumber: "0976543210",
          password: hashedPasswords[2],
        },
        {
          userId: 4,
          studentNumber: "20233456-N",
          cardNumber: "f7g8h9",
          first_name: "Robert",
          middle_name: "Lee",
          last_name: "Johnson",
          course: "BSEMC",
          year: "4",
          section: "D",
          role: "Student",
          email: "robert.johnson@example.com",
          phoneNumber: "0965432109",
          password: hashedPasswords[3],
        },
        {
          userId: 5,
          studentNumber: "20234567-N",
          cardNumber: "i1j2k3",
          first_name: "Emily",
          middle_name: "Grace",
          last_name: "Williams",
          course: "BSIT",
          year: "2",
          section: "A",
          role: "Student",
          email: "emily.williams@example.com",
          phoneNumber: "0954321098",
          password: hashedPasswords[4],
        },
        {
          userId: 6,
          studentNumber: "20235678-N",
          cardNumber: "l4m5n6",
          first_name: "Michael",
          middle_name: "James",
          last_name: "Brown",
          course: "BSCS",
          year: "3",
          section: "B",
          role: "Student",
          email: "michael.brown@example.com",
          phoneNumber: "0943210987",
          password: hashedPasswords[5],
        },
        {
          userId: 7,
          studentNumber: "20236789-N",
          cardNumber: "o7p8q9",
          first_name: "Sarah",
          middle_name: "Anne",
          last_name: "Jones",
          course: "BSIS",
          year: "1",
          section: "C",
          role: "Student",
          email: "sarah.jones@example.com",
          phoneNumber: "0932109876",
          password: hashedPasswords[6],
        },
        {
          userId: 8,
          studentNumber: "20237890-N",
          cardNumber: "r1s2t3",
          first_name: "David",
          middle_name: "Paul",
          last_name: "Miller",
          course: "BSEMC",
          year: "4",
          section: "D",
          role: "Student",
          email: "david.miller@example.com",
          phoneNumber: "0921098765",
          password: hashedPasswords[7],
        },
        {
          userId: 9,
          studentNumber: "20238901-N",
          cardNumber: "u4v5w6",
          first_name: "Lisa",
          middle_name: "May",
          last_name: "Davis",
          course: "BSIT",
          year: "2",
          section: "A",
          role: "Student",
          email: "lisa.davis@example.com",
          phoneNumber: "0910987654",
          password: hashedPasswords[8],
        },
        {
          userId: 10,
          studentNumber: "20239012-N",
          cardNumber: "x7y8z9",
          first_name: "Carlos",
          middle_name: "Miguel",
          last_name: "Garcia",
          course: "BSCS",
          year: "3",
          section: "B",
          role: "Student",
          email: "carlos.garcia@example.com",
          phoneNumber: "0909876543",
          password: hashedPasswords[9],
        },
      ];

      await studentAccount.bulkCreate(studentData);

      const unhashedData = studentData.map((student, index) => ({
        userId: student.userId,
        email: student.email,
        password: passwords[index],
      }));
      await studentUnhashedAccount.bulkCreate(unhashedData);

      const studentSubjectsData = studentData.map((student) => ({
        userId: student.userId,
        studentNumber: student.studentNumber,
        section: student.section,
        subject2: null,
        subject2_attendance: null,
        subject2_teacher: null,
        subject3: null,
        subject3_attendance: null,
        subject3_teacher: null,
        subject4: null,
        subject4_attendance: null,
        subject4_teacher: null,
        subject5: null,
        subject5_attendance: null,
        subject5_teacher: null,
        subject6: null,
        subject6_attendance: null,
        subject6_teacher: null,
        subject7: null,
        subject7_attendance: null,
        subject7_teacher: null,
        subject8: null,
        subject8_attendance: null,
        subject8_teacher: null,
      }));

      await studentSubjects.bulkCreate(studentSubjectsData);

      console.log(
        "Students, unhashed accounts, and subject records inserted successfully."
      );
    } else {
      console.log("Students already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Students:", error);
  }
};
