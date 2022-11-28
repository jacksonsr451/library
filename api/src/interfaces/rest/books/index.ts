import { Router } from "express"
import type Config from "../../../config"
import create from "./create"
import remove from "./delete"
import show from "./show"
import update from "./update"
import view from "./view"

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
