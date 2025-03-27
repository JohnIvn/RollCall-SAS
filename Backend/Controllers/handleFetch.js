import { studentAccount } from "../Models/studentAccountModel.js";

export async function handlefetch(ws, data) {
  try {
    const students = await studentAccount.findAll({
      attributes: [
        "userId",
        "studentNumber",
        "cardNumber",
        "first_name",
        "middle_name",
        "last_name",
        "course",
        "year",
        "section",
        "email",
        "phoneNumber",
      ],
      order: [
        ["last_name", "ASC"],
        ["first_name", "ASC"],
      ],
    });

    ws.send(
      JSON.stringify({
        type: "students_data",
        data: students,
      })
    );
  } catch (error) {
    console.error("Error fetching students:", error);
    ws.send(
      JSON.stringify({
        type: "error",
        message: "Failed to fetch students data",
      })
    );
  }
}
