import { Column, Entity, JoinColumn, OneToOne } from "typeorm"
import BookModel from "./BookModel"

@Entity('rent_books')
class RentBookModel {
    @Column({primary: true, type: 'string'})
    id: string 
    
    @Column({type: 'string'})
    responsable: string
    
    @Column({type: 'string'})
    isbn: string

    @OneToOne(() => BookModel, book => book.isbn)
    @JoinColumn({name: 'isbn'})
    book: BookModel
    
    @Column({type: 'date'})
    data: Date
    
    @Column({type: 'date'})
    devolution: Date
    
    @Column({type: 'varchar'})
    status: boolean
}

export default RentBookModel
