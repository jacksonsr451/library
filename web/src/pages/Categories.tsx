import React from "react"
import CategoriesStyled from "../ui/CategoriesStyled"

const Categories: React.FC = () => {
    return (
        <CategoriesStyled>
            <div className="aside">
                <h1>CATEGORIAS</h1>
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
        </CategoriesStyled>
    )
}

export default Categories
