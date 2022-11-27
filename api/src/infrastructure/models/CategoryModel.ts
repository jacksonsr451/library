import { Column, Entity } from "typeorm"

@Entity('categories')
class CategoryModel {

    @Column({primary: true, type: 'string'})
    id: string
    
    @Column({type: 'string'})
    name: string
    
    @Column({type: 'text'})
    description: string

}

export default CategoryModel
