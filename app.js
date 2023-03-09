import express from "express";
import locations from "./routes/locations/index.js";
import users from "./routes/users/index.js";
import "./database.js";
import auth from "./routes/auth/index.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
locations(app);
users(app);
auth(app);

app.listen(process.env.PORT || 3222, function () {
  console.log("app listen on port 3222");
});

// stop af gennemsyn af video express 006, time: 27.08 -
