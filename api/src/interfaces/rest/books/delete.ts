import { NextFunction, Request, Response } from "express"
import BookService from "../../../application/usecases/BookService"

const remove = (service: BookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const { isbn } = request.params
        try {
            await service.delete(isbn)
            return response.status(200).json({message: "Deletado com sucesso!"})
        } catch (error) {
            return response.status(400).json({error: error})
        }
}

export default remove
