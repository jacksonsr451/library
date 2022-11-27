import RentBookEntity from "../../domain/entities/RentBookEntity"
import RentBookObject from "../dto/RentBookObject"
import RentBookRepositoryInterface from "../interfaces/RentBookRepositoryInterface"

class RentBookService {

    #repository: RentBookRepositoryInterface

    constructor(repository: RentBookRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: RentBookObject): Promise<void> {
        await this.#repository.create(new RentBookEntity(props).object)
    }
    
    async update(props: RentBookObject): Promise<void> {
        await this.#repository.update(new RentBookEntity(props).object)
    }
    
    async delete(id: string): Promise<void> {
        await this.#repository.delete(id)
    }
    
    async show(): Promise<RentBookObject[]> {
        return await this.#repository.show()
    }
    
    async view(id: string): Promise<RentBookObject | null> {
        return await this.#repository.view(id)
    }

}

export default RentBookService
