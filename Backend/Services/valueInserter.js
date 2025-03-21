import bcrypt from "bcrypt";

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
