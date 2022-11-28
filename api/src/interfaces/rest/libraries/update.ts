import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import LibraryService from "@application/usecases/LibraryService"

const update = (service: LibraryService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            id: z.string(),
            category_id: z.string(),
            book_isbn: z.string(),
            amount: z.number(),
            description: z.string(),
        })

        try {
            const library = await schema.parseAsync(request.body)
            await service.update(library)
            return response.status(200).json({message: "Atualizado com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default update
