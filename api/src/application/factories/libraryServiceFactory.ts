import { DataSource } from "typeorm"
import LibraryRepository from "../../infrastructure/repositories/LibraryRepository"
import LibraryRepositoryInterface from "../interfaces/LibraryRepositoryInterface"
import LibraryService from "../usecases/LibraryService"


const libraryServiceFactory = (appDataSource: DataSource) => {
    const repository: LibraryRepositoryInterface = new LibraryRepository(appDataSource)
    return new LibraryService(repository)
}

export default libraryServiceFactory