import { NextFunction, Request, Response } from "express"
import { DateTime } from "luxon"
import { z } from "zod"
import RentBookService from "../../../application/usecases/RentBookService"

const update = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const schema = z.object({
            id: z.string(),
            responsable: z.string(),
            isbn: z.string(),
            data: z.string().min(1)
                .transform(value => DateTime.fromISO(value))
                .refine(value => value.isValid)
                .transform(value => value.toJSDate()),
            devolution: z.string().min(1)
                .transform(value => DateTime.fromISO(value))
                .refine(value => value.isValid)
                .transform(value => value.toJSDate()),
            status: z.boolean()
        })

        try {
            const rentBook = await schema.parseAsync(request.body)
            await service.update(rentBook)
            return response.status(200).json({message: "Atualizado com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default update
