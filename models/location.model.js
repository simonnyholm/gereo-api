import { model } from "mongoose";

const location = model("location", {
  name: String,
  address: String,
  city: String,
});

export default location;
