import { model, Schema } from "mongoose";
import permissions from "mongoose-permissions";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "A username is required"],
  },
  password: {
    type: String,
    required: [true, "A password is required"],
  },
  roletag: {
    type: String,
  },
}).plugin(permissions);

const User = model("User", UserSchema);

export default User;
