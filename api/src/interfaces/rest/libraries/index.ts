import { Router } from "express"
import type Config from "@settings/config"
import create from "@interfaces/rest/libraries/create"
import remove from "@interfaces/rest/libraries/delete"
import show from "@interfaces/rest/libraries/show"
import update from "@interfaces/rest/libraries/update"
import view from "@interfaces/rest/libraries/view"

const libraryRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.LibraryService))
    router.get('/:id', view(services.LibraryService))
    router.post('/', create(services.LibraryService))
    router.put('/', update(services.LibraryService))
    router.delete('/:id', remove(services.LibraryService))

    return router
}

export default libraryRoutesFactory
