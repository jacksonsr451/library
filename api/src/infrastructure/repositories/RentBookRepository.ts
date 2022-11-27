import { DataSource, Repository } from "typeorm";
import RentBookRepositoryInterface from "../../application/interfaces/RentBookRepositoryInterface";
import RentBookObject from "../interfaces/RentBookObject";
import RentBookModel from "../models/RentBookModel";

class RentBookRepository implements RentBookRepositoryInterface {
    #connection: Repository<RentBookModel>

    constructor(appDataSource: DataSource) {
        this.#connection = appDataSource.getRepository(RentBookModel)
    }

    async create(props: RentBookObject): Promise<void> {
        const rentBook = this.#connection.create(props)
        await this.#connection.save(rentBook)
    }
    
    async update(props: RentBookObject): Promise<void> {
        await this.#connection.update(props.id, props)
    }
    
    async delete(id: string): Promise<void> {
        await this.#connection.delete(id)
    }
    
    async show(): Promise<RentBookObject[]> {
        return await this.#connection.find()
    }
    
    async view(id: string): Promise<RentBookObject | null> {
        return await this.#connection.findOneBy({id})
    }

}

export default RentBookRepository
