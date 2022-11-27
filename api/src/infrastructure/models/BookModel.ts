import { Column, Entity } from "typeorm"

@Entity('books')
class BookModel {
    @Column({primary: true, type: 'string'})
    isbn: string
    
    @Column({type: 'string'})
    title: string
    
    @Column({type: 'string'})
    author: string
    
    @Column({type: 'simple-array'})
    coAuthro: string[]
    
    @Column({type: 'string'})
    description: string
}

export default BookModel
