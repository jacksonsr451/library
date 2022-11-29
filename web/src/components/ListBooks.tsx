import React from "react"
import BooksType from "../types/BooksTypes"
import ListBooksStyled from "../ui/ListBooksStyled"

type ListBooksProps = {
    books: BooksType[]
}

const ListBooks: React.FC<ListBooksProps> = (props) => {
    return (
        <ListBooksStyled>
        </ListBooksStyled>
    )
}

export default ListBooks
