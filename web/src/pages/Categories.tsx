import React from "react"
import Search from "../components/Search"
import CategoriesStyled from "../ui/CategoriesStyled"

const Categories: React.FC = () => {
    return (
        <CategoriesStyled>
            <div className="aside">
                <h1>CATEGORIAS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search />
            </div>
        </CategoriesStyled>
    )
}

export default Categories
