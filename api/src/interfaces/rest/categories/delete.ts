import { NextFunction, Request, Response } from "express"
import CategoryService from "../../../application/usecases/CategoryServices"

const remove = (service: CategoryService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default remove
