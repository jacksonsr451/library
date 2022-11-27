import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"
import BookModel from "./BookModel"
import CategoryModel from "./CategoryModel"

@Entity('libraries')
class LibraryModel {
    @Column({primary: true, type: 'string'})
    id: string
    
    @Column({type: 'string'})    
    category_id: string
    
    @OneToMany(() => CategoryModel, category => category.id)
    @JoinColumn({name: 'category_id'})
    category: CategoryModel

    @Column({type: 'string'})
    book_isbn: string

    @OneToOne(() => BookModel, book => book.isbn)
    @JoinColumn({name: 'book_isbn'})
    book: BookModel
    
    @Column({type: 'numeric'})
    amount: number
    
    @Column({type: 'text'})
    description: string

}

export default LibraryModel
