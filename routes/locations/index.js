import getAllLocations from "./getAllLocations.js";
import createLocation from "./createLocation.js";

export default function locations(app) {
  app.route("/api/v1/locations/:id?").get(getAllLocations).post(createLocation);
}
