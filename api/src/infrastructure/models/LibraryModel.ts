import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm"
import BookModel from "@infrastructure/models/BookModel"
import CategoryModel from "@infrastructure/models/CategoryModel"

@Entity('libraries')
class LibraryModel {
    @Column({primary: true, type: 'varchar'})
    id: string
    
    @Column({type: 'varchar'})    
    category_id: string
    
    @OneToMany(() => CategoryModel, category => category.id)
    @JoinColumn({name: 'category_id'})
    category: CategoryModel

    @Column({type: 'varchar'})
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
