import { DataSource, Repository } from "typeorm";
import BookRepositoryInterface from "@application/interfaces/BookRepositoryInterface";
import BookObject from "@infrastructure/dto/BookObject";
import BookModel from "@infrastructure/models/BookModel";

class BookRepository implements BookRepositoryInterface {
    #connection: Repository<BookModel>

    constructor(appDataSource: DataSource) {
        this.#connection = appDataSource.getRepository(BookModel)
    }

    async create(props: BookObject): Promise<void> {
        const book = this.#connection.create(props)
        await this.#connection.save(book)
    }

    async update(props: BookObject): Promise<void> {
        await this.#connection.update(props.isbn, props)
    }

    async delete(id: string): Promise<void> {
        await this.#connection.delete(id)
    }

    async show(): Promise<BookObject[]> {
        return await this.#connection.find()
    }

    async view(isbn: string): Promise<BookObject | null> {
        return await this.#connection.findOneBy({isbn})
    }

}

export default BookRepository
