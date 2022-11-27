import RentBookObject from "../../domain/interfaces/RentBookObject"

interface RentBookRepositoryInterface {
    create(props: RentBookObject): Promise<void>
    update(props: RentBookObject): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<RentBookObject[]>
    view(id: string): Promise<RentBookObject | null>
}

export default RentBookRepositoryInterface
