import BookObject from "../dto/BookObject"
import BookRepositoryInterface from "../interfaces/BookRepositoryInterface"

class BookService {

    #repository: BookRepositoryInterface

    constructor(repository: BookRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: BookObject): Promise<void> {
        await this.#repository.create(props)        
    }

    async update(props: BookObject): Promise<void> {
        await this.#repository.update(props)
    }

    async delete(id: string): Promise<void> {
        await this.#repository.delete(id)
    }

    async show(): Promise<BookObject[]> {
        return await this.#repository.show()
    }

    async view(isbn: string): Promise<BookObject | null> {
        return await this.#repository.view(isbn)
    }

}

export default BookService
