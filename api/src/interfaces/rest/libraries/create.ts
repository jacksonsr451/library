import { NextFunction, Request, Response } from "express"
import LibraryService from "../../../application/usecases/LibraryService"

const create = (service: LibraryService) => 
    async (request: Request, response: Response, next: NextFunction) => {

}

export default create
