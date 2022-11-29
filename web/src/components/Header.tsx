import React from "react";
import HeaderStyled from "../ui/HeaderStyled";

const Header: React.FC = () => {

    const navegate = (paths: string) => () => {
        window.location.href=paths
    }

    return (
        <HeaderStyled>
            <div onClick={navegate('/rent-books')} className="itens">EMPRESTIMOS</div>
            <div onClick={navegate('/libraries')} className="itens">REGISTROS</div>
            <div onClick={navegate('/categories')} className="itens">CATEGORIA</div>
            <div onClick={navegate('/books')} className="itens">LIVROS</div>
        </HeaderStyled>
    )
}

export default Header
