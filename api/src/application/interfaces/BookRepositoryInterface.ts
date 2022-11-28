import BookObject from "@domain/dto/BookObject"

interface BookRepositoryInterface {
    create(props: BookObject): Promise<void>
    update(props: BookObject): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<BookObject[]>
    view(isbn: string): Promise<BookObject | null>
}

export default BookRepositoryInterface
