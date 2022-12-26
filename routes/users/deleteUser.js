import jwt_decode from "jwt-decode";
import user from "../../models/user.model.js";

export default async function deleteUser(request, response) {
  const id = request.params.id;
  if (id) {
    const itemToDelete = await user.findById(id);
    console.log(itemToDelete);

    const splitToken = request.headers.authorization.split(" ")[1];

    const decodedToken = jwt_decode(splitToken);

    const userToConfirm = await user.findById(decodedToken.id);

    //var delName = itemToDelete.name;

    if (userToConfirm.can("delete-user")) {
      console.log("prutmigiøretigen");

      console.log(id);
      await user.findByIdAndDelete(id);
      response.json({
        message: "A user  deleted, oh yes, gal",
      });
    }
  }

  response.end();
}

//message: `A user named is ${delName} deleted, oh yes, gal`,
