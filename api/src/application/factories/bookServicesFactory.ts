import { DataSource } from "typeorm"
import BookRepository from "../../infrastructure/repositories/BookRepository"
import BookRepositoryInterface from "../interfaces/BookRepositoryInterface"
import BookService from "../usecases/BookService"

const bookServiceFactory = (appDataSource: DataSource) => {
    const repository: BookRepositoryInterface = new BookRepository(appDataSource)
    return new BookService(repository)
}

export default bookServiceFactory
