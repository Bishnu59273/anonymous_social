import getDB from "~/server/utils/mongo.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;

  if (!email) {
    return { exists: false, message: "Email is required" };
  }

  const db = await getDB();
  const user = await db
    .collection("users")
    .findOne({ email: email.toLowerCase() });

  if (user) {
    return { exists: true };
  } else {
    return { exists: false };
  }
});
