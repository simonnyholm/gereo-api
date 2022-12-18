export default async function getAllLocations(request, response) {
  response.json({ message: "get all locations" });
  response.end();
}
