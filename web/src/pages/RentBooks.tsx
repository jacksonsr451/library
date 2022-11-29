import React, { useState } from "react"
import Search from "../components/Search"
import RentBooksStyled from "../ui/RentBooksStyled"

const RentBooks: React.FC = () => {
    const [filterValues, setFilterValues] = useState<string>("")

    return (
        <RentBooksStyled>
            <div className="aside">
                <h1>EMPRESTIMOS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search 
                    filterValues={filterValues} 
                    setFilterValues={setFilterValues}/>
            </div>
        </RentBooksStyled>
    )
}

export default RentBooks
