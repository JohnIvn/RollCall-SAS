import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { teacherAccount } from "../Models/teacherAccountModel.js";

export async function handleLogin(ws, data) {
  console.log("Login Start");
  const { email, password } = data;

  try {
    const teacher = await teacherAccount.findOne({ where: { email } });

    if (!teacher) {
      console.log("Email Not Found");
      return ws.send(
        JSON.stringify({ type: "error", message: "Email Not Found" })
      );
    }

    const isMatch = await bcrypt.compare(password, teacher.password);

    if (isMatch) {
      const teacherId = teacher.userId;
      const userId = teacher.userId;
      console.log(`Teacher ID: ${teacherId}`);

      const token = jwt.sign({ email, teacherId }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });

      if (!token) throw new Error("Token Creation Error");

      ws.send(
        JSON.stringify({
          type: "success",
          message: "Login successful",
          user: teacher,
          token,
          teacherId,
          userId,
        })
      );

      console.log("Login Success");
    } else {
      console.log("Incorrect Password Attempt");
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Incorrect password. Please try again.",
        })
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    ws.send(
      JSON.stringify({ type: "error", message: "Internal server error" })
    );
  }
}

// Tried Something, doesnt know jwt well, its secured but doesnt work,
// Create a security measure to recognize unauthorized/invalid tokens thx
// export async function handleLogout(ws) {
//   console.log("Logout Start");
//   localStorage.removeItem("token");

//   ws.send(
//     JSON.stringify({
//       type: "success",
//       message: "Logout successful",
//       user: teacher,
//     })
//   );
// }
