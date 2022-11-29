import React from "react"
import Search from "../components/Search"
import LibrariesStyled from "../ui/LibrariesStyled"

const Libraries: React.FC = () => {
    return (
        <LibrariesStyled>
            <div className="aside">
                <h1>REGISTROS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search /> 
            </div>
        </LibrariesStyled>
    )
}

export default Libraries
