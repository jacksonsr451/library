import { DataSource, Repository } from "typeorm";
import LibraryRepositoryInterface from "../../application/interfaces/LibraryRepositoryInterface";
import LibraryObject from "../interfaces/LibraryObject";
import LibraryModel from "../models/LibraryModel";

class LibraryRepository implements LibraryRepositoryInterface {
    #connection: Repository<LibraryModel>

    constructor(appDataSource: DataSource) {
        this.#connection = appDataSource.getRepository(LibraryModel)
    }

    async create(props: LibraryObject): Promise<void> {
        const library = this.#connection.create(props)
        await this.#connection.save(library)
    }
    
    async update(props: LibraryObject): Promise<void> {
        await this.#connection.update(props.id, props)
    }
    
    async delete(id: string): Promise<void> {
        await this.#connection.delete(id)
    }
    
    async show(): Promise<LibraryObject[]> {
        return await this.#connection.find()
    }
    
    async view(id: string): Promise<LibraryObject | null> {
        return await this.#connection.findOneBy({id})
    }

}

export default LibraryRepository
