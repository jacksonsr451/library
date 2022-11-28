import { Request, Response } from "express"
import LibraryService from "@application/usecases/LibraryService"

const show = (service: LibraryService) => 
    async (request: Request, response: Response) => {
        try {
            const libraries = await service.show()
            return response.status(200).json(libraries)
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default show
