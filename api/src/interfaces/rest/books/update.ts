import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import BookService from "@application/usecases/BookService"

const update = (service: BookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            isbn: z.string(),
            title: z.string(),
            author: z.string(),
            coAuthro: z.array(z.string()),
            publishingCompany: z.string(),
            description: z.string(),
        })

        try {
            const book = await schema.parseAsync(request.body)
            await service.update(book)
            return response.status(201).json({sucess: "Atualizado com sucesso!"})  
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default update
