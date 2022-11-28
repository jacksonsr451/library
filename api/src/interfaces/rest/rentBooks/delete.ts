import { NextFunction, Request, Response } from "express"
import RentBookService from "../../../application/usecases/RentBookService"

const remove = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params

        try {
            await service.delete(id)
            return response.status(200).json({message: "Removido com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default remove
