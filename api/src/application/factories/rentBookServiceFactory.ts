import appDataSource from "../../data-source"
import RentBookRepository from "../../infrastructure/repositories/RentBookRepository"
import RentBookRepositoryInterface from "../interfaces/RentBookRepositoryInterface"
import RentBookService from "../usecases/RentBookService"


const rentBookServiceFactory = () => {
    const repository: RentBookRepositoryInterface = new RentBookRepository(appDataSource)
    return new RentBookService(repository)
}

export default rentBookServiceFactory
