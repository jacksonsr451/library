import { NextFunction, Request, Response } from "express"
import { z } from "zod"
import CategoryService from "../../../application/usecases/CategoryServices"

const create = (service: CategoryService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            name: z.string(),
            description: z.string()
        })

        try {
            const category = await schema.parseAsync(request.body)
            await service.create(category)
            return response.status(200).json({message: "Categoria criada com sucesso!"})
        } catch (error) {
            return response.status(400).json({error: error})
        }
}

export default create
