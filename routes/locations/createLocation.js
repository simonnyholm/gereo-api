export default async function createLocation(request, response) {
  response.json({ message: "location created" });
  response.end();
}
