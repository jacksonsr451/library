import { NextFunction, Request, Response } from "express"
import RentBookService from "../../../application/usecases/RentBookService"

const remove = (service: RentBookService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default remove
