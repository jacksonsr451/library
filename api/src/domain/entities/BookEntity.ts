import type BookObject from '../dto/BookObject'

class BookEntity {
    
    isbn: string
    title: string
    author: string
    coAuthro: string[]
    publishingCompany: string
    description: string

    constructor(props: BookObject) {
        this.isbn = props.isbn
        this.title = props.title
        this.author = props.author
        this.coAuthro = props.coAuthro || [""]
        this.publishingCompany = props.publishingCompany
        this.description = props.description
    }

    get object(): BookObject {
        return {
            isbn: this.isbn,
            title: this.title,
            author: this.author,
            coAuthro: this.coAuthro,
            publishingCompany: this.publishingCompany,
            description: this.description
        }
    }

}

export default BookEntity
