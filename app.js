import express from "express";
import locations from "./routes/locations/index.js";

const app = express();

app.use(express.static("./public"));
locations(app);

app.listen(3210, function () {
  console.log("app listen on port 3210");
});

// stop af gennemsyn af video express 006, time: 27.08
