import { Request, Response } from "express"
import LibraryService from "../../../application/usecases/LibraryService"

const view = (service: LibraryService) => 
    async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            const library = await service.view(id)
            return response.status(200).json(library)
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default view
