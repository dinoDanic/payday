import mongoose from "mongoose";

const UsersSchema = mongoose.Schema({
  email: String,
  password: String,
});

export const Users = mongoose.model("Users", UsersSchema);
