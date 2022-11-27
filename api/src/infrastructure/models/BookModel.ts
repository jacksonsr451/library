import { Column, Entity } from "typeorm"

@Entity('books')
class BookModel {
    @Column({primary: true, type: 'varchar'})
    isbn: string
    
    @Column({type: 'varchar'})
    title: string
    
    @Column({type: 'varchar'})
    author: string
    
    @Column({type: 'simple-array'})
    coAuthro: string[]
    
    @Column({type: 'text'})
    description: string
}

export default BookModel
