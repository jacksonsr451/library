import { Router } from "express"
import type Config from "../../../config"
import create from "./create"
import remove from "./delete"
import show from "./show"
import update from "./update"
import view from "./view"

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
