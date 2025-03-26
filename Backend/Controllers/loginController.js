import bcrypt from "bcrypt";
import { teacherAccount } from "../Models/teacherAccountModel.js";

export async function handleLogin(ws, data) {
  const { email, password } = data;

  try {
    const teacher = await teacherAccount.findOne({ where: { email } });

    if (!teacher) {
      return ws.send(
        JSON.stringify({ type: "error", message: "Invalid email or password" })
      );
    }

    const isMatch = await bcrypt.compare(password, teacher.password);

    if (isMatch) {
      ws.send(
        JSON.stringify({
          type: "success",
          message: "Login successful",
          user: teacher,
        })
      );
    } else {
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
