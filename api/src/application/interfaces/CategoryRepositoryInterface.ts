import CategoryObject from "../../domain/dto/CategoryObject"

interface CategoryRepositoryInterface {
    create(props: CategoryObject): Promise<void>
    update(props: CategoryObject): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<CategoryObject[]>
    view(id: string): Promise<CategoryObject | null>
}

export default CategoryRepositoryInterface
