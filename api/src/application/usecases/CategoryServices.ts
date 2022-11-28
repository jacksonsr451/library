import CategoryEntity from "../../domain/entities/CategoryEntity"
import CategoryObject from "../dto/CategoryObject"
import CategoryRepositoryInterface from "../interfaces/CategoryRepositoryInterface"

class CategoryService {

    #repository: CategoryRepositoryInterface

    constructor(repository: CategoryRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: CategoryObject): Promise<void> {
        await this.#repository.create(new CategoryEntity(props).object)
    }

    async update(props: CategoryObject): Promise<void> {
        await this.#repository.update(new CategoryEntity(props).object)
    }
    
    async delete(id: string): Promise<void> {
        await this.#repository.delete(id)
    }
    
    async show(): Promise<CategoryObject[]> {
        return await this.#repository.show()
    }
    
    async view(id: string): Promise<CategoryObject | null> {
        return await this.#repository.view(id)
    }

}

export default CategoryService
