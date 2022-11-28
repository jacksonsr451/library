import { Request, Response } from "express"
import CategoryService from "../../../application/usecases/CategoryServices"

const show = (service: CategoryService) => 
    async (request: Request, response: Response) => {
        try {
            const books = await service.show()
            return response.status(200).json(books)
        } catch (error) {
            return response.status(400).json({error: error})
        }
}

export default show
