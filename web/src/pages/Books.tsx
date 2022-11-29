import React, { useState } from "react"
import ListBooks from "../components/ListBooks"
import Search from "../components/Search"
import BooksType from "../types/BooksTypes"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    const [listBooks, setListBooks] = useState<BooksType[]>([
        {isbn: '', title: '', author: '', coAuthro: [''], publishingCompany: '', description: ''},
        {isbn: '', title: '', author: '', coAuthro: [''], publishingCompany: '', description: ''},
        {isbn: '', title: '', author: '', coAuthro: [''], publishingCompany: '', description: ''},
    ])

    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search />
                <ListBooks books={listBooks} />
            </div>
        </BooksStyled>
    )
}

export default Books
