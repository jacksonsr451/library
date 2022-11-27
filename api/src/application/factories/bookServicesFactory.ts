import appDataSource from "../../data-source"
import BookRepository from "../../infrastructure/repositories/BookRepository"
import BookRepositoryInterface from "../interfaces/BookRepositoryInterface"
import BookService from "../usecases/BookService"

const bookServiceFactory = () => {
    const repository: BookRepositoryInterface = new BookRepository(appDataSource)
    return new BookService(repository)
}

export default bookServiceFactory
