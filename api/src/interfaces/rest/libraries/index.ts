import { Router } from "express"
import type Config from "../../../config"
import create from "./create"
import remove from "./delete"
import show from "./show"
import update from "./update"
import view from "./view"

const libraryRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.LibraryService))
    router.get('/:id', view(services.LibraryService))
    router.post('/', create(services.LibraryService))
    router.put('/:id', update(services.LibraryService))
    router.delete('/:id', remove(services.LibraryService))

    return router
}

export default libraryRoutesFactory
