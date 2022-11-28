import { Router } from "express"
import type Config from "../../../config"
import create from "./create"
import remove from "./delete"
import show from "./show"
import update from "./update"
import view from "./view"

const categoryRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.CategoryService))
    router.get('/:id', view(services.CategoryService))
    router.post('/', create(services.CategoryService))
    router.put('/:id', update(services.CategoryService))
    router.delete('/:id', remove(services.CategoryService))

    return router
}

export default categoryRoutesFactory
