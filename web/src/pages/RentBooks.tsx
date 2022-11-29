import React from "react"
import RentBooksStyled from "../ui/RentBooksStyled"

const RentBooks: React.FC = () => {
    return (
        <RentBooksStyled>
            <div className="aside">
                <h1>EMPRESTIMOS</h1>
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
        </RentBooksStyled>
    )
}

export default RentBooks
