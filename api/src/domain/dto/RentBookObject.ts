export default interface RentBookObject {
    id?: string 
    responsable: string
    isbn: string
    data: Date
    devolution?: Date
    status?: boolean
}