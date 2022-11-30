import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import BookService from "@application/usecases/BookService"

const create = (service: BookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            isbn: z.string(),
            title: z.string(),
            author: z.string(),
            coAuthor: z.string()
                .transform(value => value.split(',')),
            publishingCompany: z.string(),
            description: z.string(),
        })
        try {
            const book = await schema.parseAsync(request.body)
            await service.create(book)
            return response.status(201).json({sucess: "Inserido com sucesso!"})
        } catch (error: any | unknown) {
            return response.status(400).json({error})
        }
}

export default create
