export default interface RentBookObject {
    id: string | null
    responsable: string
    isbn: string
    data: Date
    devolution: Date
    status: boolean | null
}