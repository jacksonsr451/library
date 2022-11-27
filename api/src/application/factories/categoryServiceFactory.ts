import appDataSource from "../../data-source"
import CategoryRepository from "../../infrastructure/repositories/CategoryRepository"
import CategoryRepositoryInterface from "../interfaces/CategoryRepositoryInterface"
import CategoryServices from "../usecases/CategoryServices"


const categoryServiceFactory = () => {
    const repository: CategoryRepositoryInterface = new CategoryRepository(appDataSource)
    return new CategoryServices(repository)
}

export default categoryServiceFactory