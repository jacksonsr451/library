import LibraryEntity from "../../domain/entities/LibraryEntity"
import LibraryObject from "../dto/LibraryObject"
import LibraryRepositoryInterface from "../interfaces/LibraryRepositoryInterface"

class LibraryService {

    #repository: LibraryRepositoryInterface

    constructor(repository: LibraryRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: LibraryObject): Promise<void> {
        await this.#repository.create(new LibraryEntity(props).object)
    }
    
    async update(props: LibraryObject): Promise<void> {
        await this.#repository.update(new LibraryEntity(props).object)
    }
    
    async delete(id: string): Promise<void> {
        await this.#repository.delete(id)
    }
    
    async show(): Promise<LibraryObject[]> {
        return await this.#repository.show()
    }
    
    async view(id: string): Promise<LibraryObject | null> {
        return await this.#repository.view(id)
    }

}

export default LibraryService
