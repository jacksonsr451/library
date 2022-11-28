import { NextFunction, Request, Response } from "express"
import RentBookService from "../../../application/usecases/RentBookService"

const create = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default create
