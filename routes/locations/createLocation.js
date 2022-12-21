import Location from "../../models/location.model.js";
import jwt_decode from "jwt-decode";
import user from "../../models/user.model.js";

export default async function createLOcation(request, response) {
  try {
    const document = {
      ...request.body,
      image: { ...request.file },
    };

    const location = new Location(document);

    //Her følger den amazing code:

    const splitToken = request.headers.authorization.split(" ")[1];

    console.log("splitToken", splitToken);

    const decodedToken = jwt_decode(splitToken);

    console.log(decodedToken);

    //decodedToken.id er det samme som user id

    //find bruger i db ud fra id

    const userToConfirm = await user.findById(decodedToken.id);

    console.log("userToConfirm", userToConfirm.role.permissions[0]);

    if (userToConfirm.can("create-location")) {
      console.log("prutmigiøretigen");
      await location.save();
    }

    //if (permission){ await save}

    /*

    if (decodedToken.id == ) {
      console.log("huligennem");
    }

    */

    response.status(201);
    response.json(location);
    response.end();
  } catch (error) {
    if (error._message) {
      response.status(400);
      response.end();
      return;
    }

    console.log("create location error", error);
    response.status(500);
    response.end();
  }
}

/*
export default async function createLocation(request, response) {
  response.json({ message: "location created" });
  response.end();
}

*/
