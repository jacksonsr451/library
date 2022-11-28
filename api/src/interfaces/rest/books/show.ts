import { Request, Response } from "express"
import BookService from "@application/usecases/BookService"

const show = (service: BookService) => 
    async (request: Request, response: Response) => {
        try {
            const books = await service.show()
            return response.status(200).json(books)
        } catch (error) {
            return response.status(400).json(error)
        }
}

export default show
