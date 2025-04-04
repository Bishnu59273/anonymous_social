const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
  streetAddress: String,
  city: String,
  zipCode: String,
  country: String,
  dateOfBirth: String,
  gender: String,
  securityQuestion: String,
  securityAnswer: String,
  agreeTerms: Boolean,
  subscribeNewsletter: Boolean,
});

module.exports = mongoose.model("User", userSchema);
