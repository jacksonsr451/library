import React, { useState } from "react"
import Search from "../components/Search"
import CategoriesStyled from "../ui/CategoriesStyled"

const Categories: React.FC = () => {

    const [filterValues, setFilterValues] = useState<string>("")
    
    return (
        <CategoriesStyled>
            <div className="aside">
                <h1>CATEGORIAS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search 
                    filterValues={filterValues} 
                    setFilterValues={setFilterValues}/>
            </div>
        </CategoriesStyled>
    )
}

export default Categories
