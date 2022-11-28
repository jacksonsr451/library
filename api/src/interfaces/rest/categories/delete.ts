import { NextFunction, Request, Response } from "express"
import CategoryService from "../../../application/usecases/CategoryServices"

const remove = (service: CategoryService) => 
    async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params

        try {
            await service.delete(id)
            return response.status(200).json({message: "Categoria deletada com sucesso!"})
        } catch (error) {
            return response.status(400).json({error})
        }
}

export default remove
