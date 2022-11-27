import { v4 as uuid4 } from 'uuid'
import LibraryObject from "../dto/LibraryObject"

class LibraryEntity {

    id: string
    category_id: string
    book_isbn: string
    amount: number
    description: string

    constructor(props: LibraryObject) {
        this.id = props.id || uuid4()
        this.category_id = props.category_id
        this.book_isbn = props.book_isbn
        this.amount = props.amount
        this.description = props.description
    }

    get object(): LibraryObject {
        return {
            id: this.id,
            category_id: this.category_id,
            book_isbn: this.book_isbn,
            amount: this.amount,
            description: this.description
        }
    }
}

export default LibraryEntity
