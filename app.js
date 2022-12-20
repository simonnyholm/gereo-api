import express from "express";
import locations from "./routes/locations/index.js";
import users from "./routes/users/index.js";
import "./database.js";

const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
locations(app);
users(app);

app.listen(3000, function () {
  console.log("app listen on port 3000");
});

// stop af gennemsyn af video express 006, time: 27.08 -
