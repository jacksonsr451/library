import LibraryObject from "../../domain/dto/LibraryObject"

interface LibraryRepositoryInterface {
    create(props: LibraryObject): Promise<void>
    update(props: LibraryObject): Promise<void>
    delete(id: string): Promise<void>
    show(): Promise<LibraryObject[]>
    view(id: string): Promise<LibraryObject | null>
}

export default LibraryRepositoryInterface
