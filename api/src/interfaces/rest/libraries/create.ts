import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import LibraryService from "../../../application/usecases/LibraryService"

const create = (service: LibraryService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            category_id: z.string(),
            book_isbn: z.string(),
            amount: z.number(),
            description: z.string(),
        })

        try {
            const library = await schema.parseAsync(request.body)
            await service.create(library)
            return response.status(200).json({message: "Incluido com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default create
