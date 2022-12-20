import getAllLocations from "./getAllLocations.js";
import createLocation from "./createLocation.js";
import updateLocation from "./updateLocation.js";
import deleteLocation from "./deleteLocation.js";
import upload from "../../middleware/upload.js";

export default function locations(app) {
  app
    .route("/api/v1/locations/:id?")
    .get(getAllLocations)
    .post(upload.single("image"), createLocation)
    .patch(upload.single("image"), updateLocation)
    .delete(deleteLocation);
}
