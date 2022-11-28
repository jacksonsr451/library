import BookService from '@application/usecases/BookService'
import CategoryService from '@application/usecases/CategoryServices'
import LibraryService from '@application/usecases/LibraryService'
import RentBookService from '@application/usecases/RentBookService'


interface Config {
    port: number

    services: {
        BookService: BookService
        CategoryService: CategoryService
        LibraryService: LibraryService
        RentBookService: RentBookService
    }
}

export default Config