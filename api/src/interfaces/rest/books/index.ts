import { Router } from "express"
import type Config from "../../../config"
import create from "@interfaces/rest/books/create"
import remove from "@interfaces/rest/books/delete"
import show from "@interfaces/rest/books/show"
import update from "@interfaces/rest/books/update"
import view from "@interfaces/rest/books/view"

const booksRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.BookService))
    router.get('/:isbn', view(services.BookService))
    router.post('/', create(services.BookService))
    router.put('/', update(services.BookService))
    router.delete('/:isbn', remove(services.BookService))

    return router
}

export default booksRoutesFactory
