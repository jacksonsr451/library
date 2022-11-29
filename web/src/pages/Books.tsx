import React, { useState } from "react"
import { useQuery } from 'react-query'
import Book from "../components/Book"
import ListBooks from "../components/ListBooks"
import Search from "../components/Search"
import api from "../services/api"
import BooksType from "../types/BooksTypes"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    const { data: books } = useQuery<BooksType[]>('books', async () => {
        const response = await api.get('books')
        return response.data
    })

    const [listVisible, setListVisible] = useState<boolean>(true)
    const [filterValues, setFilterValues] = useState<string>("")
    const [book, setBook] = useState<BooksType>({isbn: '', title: '', author: '', coAuthor: [''], publishingCompany: '', description: ''})

    const handleNewBook = () => {
        setListVisible(false)
        setBook({isbn: '', title: '', author: '', coAuthor: [''], publishingCompany: '', description: ''})
    }

    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div onClick={handleNewBook} className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search 
                    filterValues={filterValues} 
                    setFilterValues={setFilterValues}/>
                <ListBooks 
                    visible={listVisible} 
                    setVisible={setListVisible}
                    filterValues={filterValues}
                    setBook={setBook}
                    books={books} />
                <Book 
                    visible={listVisible} 
                    setVisible={setListVisible}
                    book={book}
                    setBook={setBook}/>
            </div>
        </BooksStyled>
    )
}

export default Books
