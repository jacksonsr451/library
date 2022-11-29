import React from "react"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <div className="search">
                    <div className="icon">
                        🔎
                    </div>
                    <input type="text" />
                </div>
            </div>
        </BooksStyled>
    )
}

export default Books
