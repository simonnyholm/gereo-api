import Location from "../../models/location.model.js";

export default async function createLOcation(request, response) {
  try {
    const document = {
      ...request.body,
      image: { ...request.file },
    };

    const location = new Location(document);

    await location.save();

    response.status(201);
    response.json(location);
    response.end();
  } catch (error) {
    if (error._message) {
      response.status(400);
      response.end();
      return;
    }

    console.log("create cheese error", error);
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
