import React from "react"
import Search from "../components/Search"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search />
            </div>
        </BooksStyled>
    )
}

export default Books
