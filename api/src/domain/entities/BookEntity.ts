import BookObject from '../interfaces/BookObject'

class BookEntity {
    
    isbn: string
    title: string
    author: string
    coAuthro: string[]
    description: string

    constructor(props: BookObject) {
        this.isbn = props.isbn
        this.title = props.title
        this.author = props.author
        this.coAuthro = props.coAuthro
        this.description = props.description
    }

    get object(): BookObject {
        return {
            isbn: this.isbn,
            title: this.title,
            author: this.author,
            coAuthro: this.coAuthro,
            description: this.description
        }
    }

}

export default BookEntity
