import { NextFunction, Request, Response } from "express"
import { DateTime } from "luxon"
import { z } from "zod"
import RentBookService from "../../../application/usecases/RentBookService"

const create = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            responsable: z.string(),
            isbn: z.string(),
            data: z.string().min(1)
                .transform(value => DateTime.fromISO(value))
                .refine(value => value.isValid)
                .transform(value => value.toJSDate())
        })

        try {
            const rentBook = await schema.parseAsync(request.body)
            await service.create(rentBook)
            return response.status(200).json({message: "Cadastrado com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default create
