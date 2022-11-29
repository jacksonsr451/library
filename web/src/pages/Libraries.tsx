import React from "react"
import LibrariesStyled from "../ui/LibrariesStyled"

const Libraries: React.FC = () => {
    return (
        <LibrariesStyled>
            <div className="aside">
                <h1>REGISTROS</h1>
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
        </LibrariesStyled>
    )
}

export default Libraries
