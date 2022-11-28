import { DataSource } from "typeorm"
import RentBookRepository from "@infrastructure/repositories/RentBookRepository"
import RentBookRepositoryInterface from "@application/interfaces/RentBookRepositoryInterface"
import RentBookService from "@application/usecases/RentBookService"


const rentBookServiceFactory = (appDataSource: DataSource) => {
    const repository: RentBookRepositoryInterface = new RentBookRepository(appDataSource)
    return new RentBookService(repository)
}

export default rentBookServiceFactory
