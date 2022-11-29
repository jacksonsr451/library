import React from "react"
import Search from "../components/Search"
import RentBooksStyled from "../ui/RentBooksStyled"

const RentBooks: React.FC = () => {
    return (
        <RentBooksStyled>
            <div className="aside">
                <h1>EMPRESTIMOS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search />
            </div>
        </RentBooksStyled>
    )
}

export default RentBooks
