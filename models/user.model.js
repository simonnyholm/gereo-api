import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "A username is required"],
  },
  password: {
    type: String,
    required: [true, "A password is required"],
  },
});

const User = model("User", UserSchema);

export default User;
