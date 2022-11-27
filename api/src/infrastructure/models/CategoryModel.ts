import { Column, Entity } from "typeorm"

@Entity('categories')
class CategoryModel {

    @Column({primary: true, type: 'varchar'})
    id: string
    
    @Column({type: 'varchar'})
    name: string
    
    @Column({type: 'text'})
    description: string

}

export default CategoryModel
