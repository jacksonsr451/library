import { DataSource } from "typeorm"
import CategoryRepository from "../../infrastructure/repositories/CategoryRepository"
import CategoryRepositoryInterface from "../interfaces/CategoryRepositoryInterface"
import CategoryServices from "../usecases/CategoryServices"


const categoryServiceFactory = (appDataSource: DataSource) => {
    const repository: CategoryRepositoryInterface = new CategoryRepository(appDataSource)
    return new CategoryServices(repository)
}

export default categoryServiceFactory