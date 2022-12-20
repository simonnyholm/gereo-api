import { ObjectId } from "mongodb";
import location from "../../models/location.model.js";
import dotenv from "dotenv";
dotenv.config();

function URLBuilder(id, resource) {
  return process.env.HOST_ADDRESS + `/api/v1/${resource}/${id}`;
}

export default async function getAllUsers(request, response) {
  const id = request.params.id;
  const limit = parseInt(request.query.limit || 20);
  const skip = parseInt(request.query.skip || 0);

  const query = id ? { _id: ObjectId(id) } : {};
  const result = await location.find(query).limit(limit).skip(skip);
  const length = await location.countDocuments();

  const nextLink =
    skip + limit >= length
      ? null
      : process.env.HOST_ADDRESS +
        `/api/v1/cheeses?limit=${limit}&skip=${skip + limit}`;
  const previousLink =
    skip === 0
      ? null
      : process.env.HOST_ADDRESS +
        `/api/v1/cheeses?limit=${limit}&skip=${
          skip - limit < 0 ? 0 : skip - limit
        }`;

  const presentation = {
    count: length,
    next: nextLink,
    previous: previousLink,
    results: result.map((item) => ({
      ...item,
      url: URLBuilder(item._id, "cheese"),
    })),
  };

  response.json(
    id
      ? { ...result[0], url: URLBuilder(result[0]?._id, "cheese") }
      : presentation
  );
  response.end();
}

/*
export default async function getAllLocations(request, response) {
  response.json({ message: "get all locations" });
  response.end();
}
*/
