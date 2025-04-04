// server/api/users.js
import getDB from "~/server/utils/mongo";

export default defineEventHandler(async () => {
  const db = await getDB();
  const users = await db.collection("users").find({}).toArray();
  console.log("users: ", users);
  return users;
});
