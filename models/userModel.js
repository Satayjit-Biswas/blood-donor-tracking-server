const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
    },
    phone: {
      type: String,
      required: [true, "can't be blank"],
    },
    location: {
      type: String,
      required: [true, "can't be blank"],
    },
    blood: {
      type: String,
      required: [true, "can't be blank"],
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
