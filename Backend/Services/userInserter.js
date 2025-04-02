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
      const teachers = [
        {
          teacherNumber: 1,
          first_name: "Jan Ivan",
          middle_name: "V.",
          last_name: "Montenegro",
          email: "teacher1@gmail.com",
          phoneNumber: "09123456789",
          password: "testtest1",
        },
        {
          teacherNumber: 2,
          first_name: "Maria",
          middle_name: "C.",
          last_name: "Santos",
          email: "teacher2@gmail.com",
          phoneNumber: "09234567890",
          password: "testtest2",
        },
        {
          teacherNumber: 3,
          first_name: "Juan",
          middle_name: "D.",
          last_name: "Cruz",
          email: "teacher3@gmail.com",
          phoneNumber: "09345678901",
          password: "testtest3",
        },
        {
          teacherNumber: 4,
          first_name: "Ana",
          middle_name: "M.",
          last_name: "Reyes",
          email: "teacher4@gmail.com",
          phoneNumber: "09456789012",
          password: "testtest4",
        },
        {
          teacherNumber: 5,
          first_name: "Pedro",
          middle_name: "E.",
          last_name: "Gonzales",
          email: "teacher5@gmail.com",
          phoneNumber: "09567890123",
          password: "testtest5",
        },
      ];

      for (const teacher of teachers) {
        const hashedPassword = await bcrypt.hash(teacher.password, saltRounds);

        const teacherData = {
          teacherNumber: teacher.teacherNumber,
          first_name: teacher.first_name,
          middle_name: teacher.middle_name,
          last_name: teacher.last_name,
          email: teacher.email,
          phoneNumber: teacher.phoneNumber,
          password: hashedPassword,
        };

        await teacherAccount.create(teacherData);

        await teacherUnhashedAccount.create({
          userId: teacher.teacherNumber,
          teacherNumber: teacher.teacherNumber,
          email: teacher.email,
          password: teacher.password,
        });
      }

      console.log("5 teachers inserted successfully in both tables.");
    } else {
      console.log("Teachers already exist, skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting Teachers:", error);
  }
};

export const insertStudentIfNotExist = async () => {
  try {
    const saltRounds = 10;
    const existingStudents = await studentAccount.findAll();

    if (existingStudents.length === 0) {
      const passwords = [
        "Adlawan2023!", // DeeJay O. Adlawan
        "Aquino2023!", // Rafael N. Aquino
        "Arcilla2023!", // Khyla Arcilla
        "Aspiras2023!", // Jeffrey M. Aspiras
        "Azares2023!", // J-Vincent C. Azares
        "Banatao2023!", // Kurt Russel N. Banatao
        "Benlota2023!", // Allexis L. Benlota
        "Cania2023!", // Matthew Gabriel M. Cania
        "Catajay2023!", // Marcus Benedict P. Catajay
        "Cruz2023!", // Ice Jhefferson V. Cruz
        "Dator2023!", // Emmanuel Solomon B. Dator
        "Echavez2023!", // Carl L. Echavez
        "Enoc2023!", // Christopher C. Enoc
        "Fullon2023!", // Victor Fullon
        "Gabayno2023!", // Kirby John L. Gabayno
        "Gamotia2023!", // Eugene Louie Gamotia
        "Janobas2023!", // Luke Allen G. Janobas
        "Lumanog2023!", // Christian Dwight P. Lumanog
        "Maglunob2023!", // Rafhael B. Maglunob
        "Montenegro2023!", // Jan Ivan V. Montenegro
        "Nunez2023!", // Aldinmark Christian H. Nuñez
        "Obien2023!", // Janelle C. Obien
        "Orizal2023!", // Ezra L. Orizal
        "Padalhin2023!", // Ace O. Padalhin
        "Patriarca2023!", // Darylle James P. Patriarca
        "Royo2023!", // Karl Andrell Royo
        "Sabangan2023!", // Clarence M. Sabangan
        "Santos2023!", // John Ivan B. Santos
        "Tagadtad2023!", // John Paul D. Tagadtad
        "Araneta2023!", // Abegail Rose F. Araneta
        "Arzadon2023!", // Clarissa Joyce V. Arzadon
        "Barcelona2023!", // Lei Andreaa Barcelona
        "Caacbay2023!", // Jheramae N. Caacbay
        "Cimanes2023!", // Josar G. Cimanes
        "Martinez2023!", // Kiel Gemelle P. Martinez
        "Nosora2023!", // Khim Gwyneth P. Nosora
        "Payumo2023!", // Ylleona Rose D. Payumo
        "Taganna2023!", // Majan Isabelle T. Taganna
        "Vergara2023!", // Andreana Mae E. Vergara
      ];

      const hashedPasswords = await Promise.all(
        passwords.map((password) => bcrypt.hash(password, saltRounds))
      );

      const studentData = [
        {
          userId: 1,
          studentNumber: "20230787-N",
          cardNumber: "7c65b42",
          first_name: "Deejay",
          middle_name: "O",
          last_name: "Adlawan",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "deejay.adlawan@gmail.com",
          phoneNumber: "09123456781",
          password: hashedPasswords[0],
        },
        {
          userId: 2,
          studentNumber: "20230880-N",
          cardNumber: "7b9aa5",
          first_name: "Rafael",
          middle_name: "N",
          last_name: "Aquino",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "rafael.aquino@gmail.com",
          phoneNumber: "09123456782",
          password: hashedPasswords[1],
        },
        {
          userId: 3,
          studentNumber: "20231165-N",
          cardNumber: "3e7c95",
          first_name: "Khyl",
          middle_name: "A",
          last_name: "Arcilla",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "khyl.arcilla@gmail.com",
          phoneNumber: "09123456783",
          password: hashedPasswords[2],
        },
        {
          userId: 4,
          studentNumber: "20230881-N",
          cardNumber: "f3d6b5",
          first_name: "Jeffrey",
          middle_name: "M",
          last_name: "Aspiras",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "jeffrey.aspiras@gmail.com",
          phoneNumber: "09123456784",
          password: hashedPasswords[3],
        },
        {
          userId: 5,
          studentNumber: "20231189-N",
          cardNumber: "cb9695",
          first_name: "J-Vincent",
          middle_name: "C",
          last_name: "Azares",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "jvincent.azares@gmail.com",
          phoneNumber: "09123456785",
          password: hashedPasswords[4],
        },
        {
          userId: 6,
          studentNumber: "20231558-N",
          cardNumber: "4dcf135",
          first_name: "Kurt Russel",
          middle_name: "N",
          last_name: "Banatao",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "kurtrussel.banatao@gmail.com",
          phoneNumber: "09123456786",
          password: hashedPasswords[5],
        },
        {
          userId: 7,
          studentNumber: "20231473-N",
          cardNumber: "9d085",
          first_name: "Allexis",
          middle_name: "L",
          last_name: "Benlota",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "allexis.benlota@gmail.com",
          phoneNumber: "09123456787",
          password: hashedPasswords[6],
        },
        {
          userId: 8,
          studentNumber: "20231104-N",
          cardNumber: "45dee5",
          first_name: "Matthew Gabriel",
          middle_name: "M",
          last_name: "Cania",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "matthew.cania@gmail.com",
          phoneNumber: "09123456788",
          password: hashedPasswords[7],
        },
        {
          userId: 9,
          studentNumber: "20230866-N",
          cardNumber: "43ac125",
          first_name: "Marcus Benedict",
          middle_name: "P",
          last_name: "Catajay",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "marcus.catajay@gmail.com",
          phoneNumber: "09123456789",
          password: hashedPasswords[8],
        },
        {
          userId: 10,
          studentNumber: "20231271-N",
          cardNumber: "69b0125",
          first_name: "Ice Jhefferson",
          middle_name: "V",
          last_name: "Cruz",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "ice.cruz@gmail.com",
          phoneNumber: "09123456790",
          password: hashedPasswords[9],
        },
        {
          userId: 11,
          studentNumber: "20231589-N",
          cardNumber: "7g6f5e2",
          first_name: "Emmanuel Solomon",
          middle_name: "B",
          last_name: "Dator",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "emmanuel.dator@gmail.com",
          phoneNumber: "09123456791",
          password: hashedPasswords[10],
        },
        {
          userId: 12,
          studentNumber: "20231551-N",
          cardNumber: "8h7g6f3",
          first_name: "Carl",
          middle_name: "L",
          last_name: "Echavez",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "carl.echavez@gmail.com",
          phoneNumber: "09123456792",
          password: hashedPasswords[11],
        },
        {
          userId: 13,
          studentNumber: "20231433-N",
          cardNumber: "9i8h7g4",
          first_name: "Christopher",
          middle_name: "C",
          last_name: "Enoc",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "christopher.enoc@gmail.com",
          phoneNumber: "09123456793",
          password: hashedPasswords[12],
        },
        {
          userId: 14,
          studentNumber: "20231213-N",
          cardNumber: "0j9i8h5",
          first_name: "Victor",
          middle_name: "",
          last_name: "Fullon",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "victor.fullon@gmail.com",
          phoneNumber: "09123456794",
          password: hashedPasswords[13],
        },
        {
          userId: 15,
          studentNumber: "20231685-N",
          cardNumber: "1k0j9i6",
          first_name: "Kirby John",
          middle_name: "L",
          last_name: "Gabayno",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "kirby.gabayno@gmail.com",
          phoneNumber: "09123456795",
          password: hashedPasswords[14],
        },
        {
          userId: 16,
          studentNumber: "20231663-N",
          cardNumber: "2l1k0j7",
          first_name: "Eugene Louie",
          middle_name: "",
          last_name: "Gamotia",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "eugene.gamotia@gmail.com",
          phoneNumber: "09123456796",
          password: hashedPasswords[15],
        },
        {
          userId: 17,
          studentNumber: "20230846-N",
          cardNumber: "3m2l1k8",
          first_name: "Luke Allen",
          middle_name: "G",
          last_name: "Janobas",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "luke.janobas@gmail.com",
          phoneNumber: "09123456797",
          password: hashedPasswords[16],
        },
        {
          userId: 18,
          studentNumber: "20231280-N",
          cardNumber: "4n3m2l9",
          first_name: "Christian Dwight",
          middle_name: "P",
          last_name: "Lumanog",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "christian.lumanog@gmail.com",
          phoneNumber: "09123456798",
          password: hashedPasswords[17],
        },
        {
          userId: 19,
          studentNumber: "20231485-N",
          cardNumber: "5o4n3m0",
          first_name: "Rafhael",
          middle_name: "B",
          last_name: "Maglunob",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "rafhael.maglunob@gmail.com",
          phoneNumber: "09123456799",
          password: hashedPasswords[18],
        },
        {
          userId: 20,
          studentNumber: "20231050-N",
          cardNumber: "6p5o4n1",
          first_name: "Jan Ivan",
          middle_name: "V",
          last_name: "Montenegro",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "jan.montenegro@gmail.com",
          phoneNumber: "09123456800",
          password: hashedPasswords[19],
        },
        {
          userId: 21,
          studentNumber: "20230784-N",
          cardNumber: "7q6p5o2",
          first_name: "Aldinmark Christian",
          middle_name: "H",
          last_name: "Nuñez",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "aldinmark.nunez@gmail.com",
          phoneNumber: "09123456801",
          password: hashedPasswords[20],
        },
        {
          userId: 22,
          studentNumber: "20230829-N",
          cardNumber: "8r7q6p3",
          first_name: "Janelle",
          middle_name: "C",
          last_name: "Obien",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "janelle.obien@gmail.com",
          phoneNumber: "09123456802",
          password: hashedPasswords[21],
        },
        {
          userId: 23,
          studentNumber: "20231481-N",
          cardNumber: "9s8r7q4",
          first_name: "Ezra",
          middle_name: "L",
          last_name: "Orizal",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "ezra.orizal@gmail.com",
          phoneNumber: "09123456803",
          password: hashedPasswords[22],
        },
        {
          userId: 24,
          studentNumber: "20231186-N",
          cardNumber: "0t9s8r5",
          first_name: "Ace",
          middle_name: "O",
          last_name: "Padalhin",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "ace.padalhin@gmail.com",
          phoneNumber: "09123456804",
          password: hashedPasswords[23],
        },
        {
          userId: 25,
          studentNumber: "20230870-N",
          cardNumber: "1u0t9s6",
          first_name: "Darylle James",
          middle_name: "P",
          last_name: "Patriarca",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "darylle.patriarca@gmail.com",
          phoneNumber: "09123456805",
          password: hashedPasswords[24],
        },
        {
          userId: 26,
          studentNumber: "20231434-N",
          cardNumber: "2v1u0t7",
          first_name: "Karl Andrell",
          middle_name: "",
          last_name: "Royo",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "karl.royo@gmail.com",
          phoneNumber: "09123456806",
          password: hashedPasswords[25],
        },
        {
          userId: 27,
          studentNumber: "20230867-N",
          cardNumber: "3w2v1u8",
          first_name: "Clarence",
          middle_name: "M",
          last_name: "Sabangan",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "clarence.sabangan@gmail.com",
          phoneNumber: "09123456807",
          password: hashedPasswords[26],
        },
        {
          userId: 28,
          studentNumber: "20231361-N",
          cardNumber: "4x3w2v9",
          first_name: "John Ivan",
          middle_name: "B",
          last_name: "Santos",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "john.santos@gmail.com",
          phoneNumber: "09123456808",
          password: hashedPasswords[27],
        },
        {
          userId: 29,
          studentNumber: "20230926-N",
          cardNumber: "5y4x3w0",
          first_name: "John Paul",
          middle_name: "D",
          last_name: "Tagadtad",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "john.tagadtad@gmail.com",
          phoneNumber: "09123456809",
          password: hashedPasswords[28],
        },
        {
          userId: 30,
          studentNumber: "20231137-N",
          cardNumber: "6z5y4x1",
          first_name: "Abegail Rose",
          middle_name: "F",
          last_name: "Araneta",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "abegail.araneta@gmail.com",
          phoneNumber: "09123456810",
          password: hashedPasswords[29],
        },
        {
          userId: 31,
          studentNumber: "20230869-N",
          cardNumber: "7a6z5y2",
          first_name: "Clarissa Joyce",
          middle_name: "V",
          last_name: "Arzadon",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "clarissa.arzadon@gmail.com",
          phoneNumber: "09123456811",
          password: hashedPasswords[30],
        },
        {
          userId: 32,
          studentNumber: "20231293-N",
          cardNumber: "8b7a6z3",
          first_name: "Lei Andrea",
          middle_name: "",
          last_name: "Barcelona",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "lei.barcelona@gmail.com",
          phoneNumber: "09123456812",
          password: hashedPasswords[31],
        },
        {
          userId: 33,
          studentNumber: "20231560-N",
          cardNumber: "9c8b7a4",
          first_name: "Jheramae",
          middle_name: "N",
          last_name: "Caacbay",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "jheramae.caacbay@gmail.com",
          phoneNumber: "09123456813",
          password: hashedPasswords[32],
        },
        {
          userId: 34,
          studentNumber: "20230786-N",
          cardNumber: "0d9c8b5",
          first_name: "Josar",
          middle_name: "G",
          last_name: "Cimanes",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "josar.cimanes@gmail.com",
          phoneNumber: "09123456814",
          password: hashedPasswords[33],
        },
        {
          userId: 35,
          studentNumber: "20231607-N",
          cardNumber: "1e0d9c6",
          first_name: "Kiel Gemelle",
          middle_name: "P",
          last_name: "Martinez",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "kiel.martinez@gmail.com",
          phoneNumber: "09123456815",
          password: hashedPasswords[34],
        },
        {
          userId: 36,
          studentNumber: "20231187-N",
          cardNumber: "2f1e0d7",
          first_name: "Khim Gwyneth",
          middle_name: "P",
          last_name: "Nosora",
          course: "BSIS",
          year: "4",
          section: "D",
          role: "Student",
          email: "khim.nosora@gmail.com",
          phoneNumber: "09123456816",
          password: hashedPasswords[35],
        },
        {
          userId: 37,
          studentNumber: "20230955-N",
          cardNumber: "3g2f1e8",
          first_name: "Ylleona Rose",
          middle_name: "D",
          last_name: "Payumo",
          course: "BSIT",
          year: "2",
          section: "B",
          role: "Student",
          email: "ylleona.payumo@gmail.com",
          phoneNumber: "09123456817",
          password: hashedPasswords[36],
        },
        {
          userId: 38,
          studentNumber: "20231258-N",
          cardNumber: "4h3g2f9",
          first_name: "Majan Isabelle",
          middle_name: "T",
          last_name: "Taganna",
          course: "BSCS",
          year: "3",
          section: "A",
          role: "Student",
          email: "majan.taganna@gmail.com",
          phoneNumber: "09123456818",
          password: hashedPasswords[37],
        },
        {
          userId: 39,
          studentNumber: "20231275-N",
          cardNumber: "5i4h3g0",
          first_name: "Andreana Mae",
          middle_name: "E",
          last_name: "Vergara",
          course: "BSEMC",
          year: "1",
          section: "C",
          role: "Student",
          email: "andreana.vergara@gmail.com",
          phoneNumber: "09123456819",
          password: hashedPasswords[38],
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
