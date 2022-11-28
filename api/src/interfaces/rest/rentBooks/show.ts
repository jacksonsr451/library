import { NextFunction, Request, Response } from "express"
import RentBookService from "@application/usecases/RentBookService"

const show = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        try {
            const rentBook = await service.show()
            return response.status(200).json(rentBook) 
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default show
