export default interface BookObject {
    isbn: string
    title: string
    author: string
    coAuthro?: string[]
    publishingCompany: string
    description: string
}