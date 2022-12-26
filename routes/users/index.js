import auth from "../../middleware/auth.js";
import createUser from "./createUser.js";
import deleteUser from "./deleteUser.js";
import getAllUsers from "./getAllUsers.js";

export default function users(app) {
  app
    .route("/api/v1/users/:id?")
    .get(getAllUsers)
    .post(createUser)
    //.all(auth)
    .delete(deleteUser);
  //.patch()
}
