// server/api/login.js
import getDB from "~/server/utils/mongo";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return { success: false, message: "Email and password required" };
  }

  const db = await getDB();
  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return { success: false, message: "User not found" };
  }

  // If you're using plain text password (not recommended):
  if (user.password !== password) {
    return { success: false, message: "Incorrect password" };
  }

  // ✅ Success
  return {
    success: true,
    message: "Login successful",
    user: {
      email: user.email,
      name: user.firstName || "",
    },
  };
});
