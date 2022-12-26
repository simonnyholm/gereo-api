import location from "../../models/location.model.js";
import { unlink } from "node:fs/promises";
import jwt_decode from "jwt-decode";
import user from "../../models/user.model.js";

export default async function deleteLocation(request, response) {
  const id = request.params.id;
  if (id) {
    const itemToDelete = await location.findById(id);
    console.log(itemToDelete);

    const splitToken = request.headers.authorization.split(" ")[1];

    const decodedToken = jwt_decode(splitToken);

    const userToConfirm = await user.findById(decodedToken.id);

    if (userToConfirm.can("delete-location")) {
      console.log("prutmigiøretigen");
      if (itemToDelete.image.path) {
        await unlink(itemToDelete.image.path);
      }

      console.log(id);
      await location.findByIdAndDelete(id);
      response.json({ message: "A location is deleted, oh yes, boi" });
    }
  }

  response.end();
}
