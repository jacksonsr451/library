import React, { Dispatch, SetStateAction } from "react"
import BooksType from "../types/BooksTypes"
import ListBooksStyled from "../ui/ListBooksStyled"

type ListBooksProps = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    books: BooksType[]
}

const ListBooks: React.FC<ListBooksProps> = (props) => {
    return (
        <ListBooksStyled visible={props.visible}>
            <table>
                <thead>
                    <tr>
                        <td className="isbn">ISBN</td>
                        <td className="title">TITULO</td>
                        <td className="author">AUTOR</td>
                        <td className="company">EDITORA</td>
                        <td className="descriotion">DESCRIÇÃO</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map(book => {
                            return (
                                <tr>
                                    <td className="isbn">{book.isbn}</td>
                                    <td className="title">{book.title}</td>
                                    <td className="author">{book.author}</td>
                                    <td className="company">{book.publishingCompany}</td>
                                    <td className="descriotion">{book.description}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </ListBooksStyled>
    )
}

export default ListBooks
