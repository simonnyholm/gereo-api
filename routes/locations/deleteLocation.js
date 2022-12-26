import location from "../../models/location.model.js";
import { unlink } from "node:fs/promises";

export default async function deleteLocation(request, response) {
  const id = request.params.id;
  if (id) {
    const itemToDelete = await location.findById(id);
    console.log(itemToDelete);


    


    if (itemToDelete.image.path) {
      await unlink(itemToDelete.image.path);
    }

    console.log(id);
    await location.findByIdAndDelete(id);
    response.json({ message: "A location is deleted, oh yes" });
  }

  response.end();
}
