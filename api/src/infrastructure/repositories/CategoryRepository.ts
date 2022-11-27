import { DataSource, Repository } from "typeorm";
import CategoryRepositoryInterface from "../../application/interfaces/CategoryRepositoryInterface";
import CategoryObject from "../dto/CategoryObject";
import CategoryModel from "../models/CategoryModel";

class CategoryRepository implements CategoryRepositoryInterface {
    #connection: Repository<CategoryModel>

    constructor(appDataSource: DataSource) {
        this.#connection = appDataSource.getRepository(CategoryModel)
    }
 
    async create(props: CategoryObject): Promise<void> {
        const category = this.#connection.create(props)
        await this.#connection.save(category)
    }

    async update(props: CategoryObject): Promise<void> {
        await this.#connection.update(props.id, props)
    }
    
    async delete(id: string): Promise<void> {
        await this.#connection.delete(id) 
    }
    
    async show(): Promise<CategoryObject[]> {
        return await this.#connection.find()
    }
    
    async view(id: string): Promise<CategoryObject | null> {
        return await this.#connection.findOneBy({id})
    }

}

export default CategoryRepository