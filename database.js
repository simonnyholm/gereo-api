import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.MONGO_URI;

async function main() {
  await mongoose.connect(uri);
  console.log("DB connection established via mongoose");
}

main().catch((error) => console.log("DB connection error", error));

// mongoose
//   .connect(uri)
//   .then(() => console.log("DB connection established"))
//   .catch((error) => console.log("DB connection error", error));
