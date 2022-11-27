import CategoryObject from "../dto/CategoryObject"
import CategoryRepositoryInterface from "../interfaces/CategoryRepositoryInterface"

class CategoryServices {

    #repository: CategoryRepositoryInterface

    constructor(repository: CategoryRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: CategoryObject): Promise<void> {
        await this.#repository.create(props)
    }

    async update(props: CategoryObject): Promise<void> {
        await this.#repository.update(props)
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

export default CategoryServices
