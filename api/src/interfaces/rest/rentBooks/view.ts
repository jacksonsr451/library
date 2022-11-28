import { NextFunction, Request, Response } from "express"
import RentBookService from "../../../application/usecases/RentBookService"

const view = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params

        try {
            const rentBook = await service.view(id)
            return response.status(200).json(rentBook)
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default view
