import jwt_decode from "jwt-decode";
import user from "../../models/user.model.js";
import assignRole from "mongoose-permissions";
import revokeRole from "mongoose-permissions";

export default async function updateUser(request, response) {
  try {
    const splitToken = request.headers.authorization.split(" ")[1];

    const decodedToken = jwt_decode(splitToken);

    const userToConfirm = await user.findById(decodedToken.id);

    if (userToConfirm.can("update-user")) {
      console.log("prutmigiøretigen-uh");
      const result = await user.findByIdAndUpdate(request.params.id, {
        returnOriginal: false,
      });

      if (request.body.roletag == "a") {
        console.log("Assign admin role");
        await result.assignRole({
          name: "admin",
          permissions: [
            {
              name: "create-location",
            },
            {
              name: "update-location",
            },
            {
              name: "delete-location",
            },
            {
              name: "delete-user",
            },
            {
              name: "update-user",
            },
          ],
        });
      }

      if (request.body.roletag == "c") {
        console.log("Assign admin role");
        await result.assignRole({
          name: "admin",
          permissions: [
            {
              name: "create-location",
            },
            {
              name: "update-location",
            },
          ],
        });
      }

      if (request.body.roletag == "revokec") {
        await result.revokeRole("Creator");
        console.log("revoke creator");
      } else if (request.body.roletag == "revokea") {
        console.log("revoke admin");
        await result.revokeRole("Admin");
      }

      response.status(200);
      response.json(result);
      response.end();
    }
  } catch (error) {
    if (error._message) {
      response.status(400);
      response.end();
      return;
    }

    console.log("Error updating location", error);
    response.status(500);
    response.end();
  }
}
