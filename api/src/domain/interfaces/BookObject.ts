export default interface BookObject {
    isbn: string | null
    title: string
    author: string
    coAuthro: string[]
    description: string
}