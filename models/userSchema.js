import mongoose from "mongoose";
const { Schema } = mongoose;

const userModel = new Schema({
  username: String,
  email: String,
  password: String
});


export default mongoose.model('signup', userModel);