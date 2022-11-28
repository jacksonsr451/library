import BookEntity from "@domain/entities/BookEntity"
import BookObject from "@application/dto/BookObject"
import BookRepositoryInterface from "@application/interfaces/BookRepositoryInterface"

class BookService {

    #repository: BookRepositoryInterface

    constructor(repository: BookRepositoryInterface) {
        this.#repository = repository
    }

    async create(props: BookObject): Promise<void> {
        await this.#repository.create(new BookEntity(props).object)        
    }

    async update(props: BookObject): Promise<void> {
        await this.#repository.update(new BookEntity(props).object)
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
