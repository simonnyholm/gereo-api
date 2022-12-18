import getAllLocations from "./getAllLocations.js";
import createLocation from "./createLocation.js";

export default function locations(app) {
  app.route("/locations").get(getAllLocations).post(createLocation);
}
