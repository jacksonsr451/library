import BookObject from '@domain/dto/BookObject'
import BookEntity from '@domain/entities/BookEntity'

describe('BookEntity', () => {
    const book: BookObject = {
        isbn: "978-85-508-0460-6",
        title: "Clean Code",
        author: "Robert Cecil Martin",
        publishingCompany: 'Alta Books',
        description: "A description by book"
    }

    it('should be create a new BookEntity', () => {
        const entity = new BookEntity(book)
        
        expect(entity.isbn).toEqual(book.isbn)
        expect(entity.title).toEqual(book.title)
        expect(entity.author).toEqual(book.author)
        expect(entity.publishingCompany).toEqual(book.publishingCompany)
        expect(entity.description).toEqual(book.description)
    })

})