import { Request, Response } from "express"
import CategoryService from "@application/usecases/CategoryServices"

const view = (service: CategoryService) => 
    async (request: Request, response: Response) => {
        const { id } = request.params
        try {
            const category = await service.view(id)
            return response.status(200).json(category)
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default view
