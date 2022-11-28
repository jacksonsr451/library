import { NextFunction, Request, Response } from "express"
import CategoryService from "../../../application/usecases/CategoryServices"

const create = (service: CategoryService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default create
