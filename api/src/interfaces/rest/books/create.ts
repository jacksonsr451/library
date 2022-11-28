import { NextFunction, Request, Response } from "express"
import BookService from "../../../application/usecases/BookService"

const create = (service: BookService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default create
