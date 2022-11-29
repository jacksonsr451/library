import React, { useState } from "react"
import ListBooks from "../components/ListBooks"
import Search from "../components/Search"
import BooksType from "../types/BooksTypes"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    const [listBooks, setListBooks] = useState<BooksType[]>([
        {isbn: '978-85-508-0480-6', title: 'Arquitetura Limpa', author: 'Robert C. Martin', coAuthro: [''], publishingCompany: 'Alta Books', description: 'Arquitetura limpa é uma leitura essencial para profissionais que já atuam ou querem ingressar no mercado.'},
        {isbn: '978-85-508-0065-3', title: 'Domain-Driven DESIGN', author: 'Eric Evans', coAuthro: [''], publishingCompany: 'Alta Books', description: 'Este livro pertence às prateleiras de todos os desenvolvedores sérios de software.'},
        {isbn: '978-85-7522-724-4', title: 'Refatoração', author: 'Martin Fowler', coAuthro: ['Kent Beck'], publishingCompany: 'Novatec', description: 'Qualquer tolo escreve um código que um computador possa entender. Bons programadores escrevem códigos que os seres humanos podem entender.'},
    ])
    const [listVisible, setListVisible] = useState<boolean>(true)

    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search />
                <ListBooks 
                    visible={listVisible} 
                    setVisible={setListVisible} 
                    books={listBooks} />
            </div>
        </BooksStyled>
    )
}

export default Books
