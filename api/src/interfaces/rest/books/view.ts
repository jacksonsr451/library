import { Request, Response } from "express"
import BookService from "../../../application/usecases/BookService"

const view = (service: BookService) => 
    async (request: Request, response: Response) => {
        const { isbn } = request.params
        try {
            const book = await service.view(isbn)
            return response.status(200).json(book)
        } catch (error) {
            return response.status(400).json(error)
        }
}

export default view
