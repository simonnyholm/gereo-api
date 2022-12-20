import { unlink } from "node:fs/promises"
import Location from "../../models/location.model.js"

export default async function updateLocation(request, response) {
	
	try {
	
		let document = {}

		if (!request.file) {
			document = { ...request.body }
		} else {
			document = {
				...request.body,
				image: { ...request.file }
			}
			const oldResult = await Location.findById(request.params.id)
			await unlink(oldResult.image.path)
		}

		const result = await Location.findByIdAndUpdate(
			request.params.id,
			document,
			{ returnOriginal: false }
		)

		response.status(200)
		response.json(result)
		response.end()
	} catch (error) {
		if (error._message) {
			response.status(400)
			response.end()
			return
		}

		console.log("update cheese error", error)
		response.status(500)
		response.end()
	}
}