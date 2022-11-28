import { Router } from "express"
import type Config from "../../../config"
import create from "@interfaces/rest/categories/create"
import remove from "@interfaces/rest/categories/delete"
import show from "@interfaces/rest/categories/show"
import update from "@interfaces/rest/categories/update"
import view from "@interfaces/rest/categories/view"

const categoryRoutesFactory = (services: Config['services']) => {
    const router = Router()

    router.get('/', show(services.CategoryService))
    router.get('/:id', view(services.CategoryService))
    router.post('/', create(services.CategoryService))
    router.put('/', update(services.CategoryService))
    router.delete('/:id', remove(services.CategoryService))

    return router
}

export default categoryRoutesFactory
