import { Router } from "express"
import type Config from "@settings/config"
import create from "@interfaces/rest/rentBooks/create"
import remove from "@interfaces/rest/rentBooks/delete"
import show from "@interfaces/rest/rentBooks/show"
import update from "@interfaces/rest/rentBooks/update"
import view from "@interfaces/rest/rentBooks/view"

const rentBookRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.RentBookService))
    router.get('/:id', view(services.RentBookService))
    router.post('/', create(services.RentBookService))
    router.put('/', update(services.RentBookService))
    router.delete('/:id', remove(services.RentBookService))

    return router
}

export default rentBookRoutesFactory
