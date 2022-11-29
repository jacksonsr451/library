import React, { Dispatch, SetStateAction } from "react"
import BooksType from "../types/BooksTypes"
import ListBooksStyled from "../ui/ListBooksStyled"

type ListBooksProps = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    filterValues: string
    setBook: Dispatch<SetStateAction<BooksType>>
    books: BooksType[] | null | undefined
}

const ListBooks: React.FC<ListBooksProps> = (props) => {

    const handleBook = (book: BooksType) => () => {
        props.setBook(book)
        props.setVisible(! props.visible)
    }

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
                        props.books?.filter((book) => {
                            return book.title.toLowerCase()
                                .includes(props.filterValues.toLowerCase()) ||
                                book.isbn.toLowerCase()
                                    .includes(props.filterValues.toLowerCase()) ||
                                book.author.toLowerCase()
                                    .includes(props.filterValues.toLowerCase()) ||
                                book.publishingCompany.toLowerCase()
                                    .includes(props.filterValues.toLowerCase()) ||
                                book.description.toLowerCase()
                                    .includes(props.filterValues.toLowerCase())
                        }).map(book => {
                            return (
                                <tr onClick={handleBook(book)}>
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
