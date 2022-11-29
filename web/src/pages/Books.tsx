import React, { useState } from "react"
import Book from "../components/Book"
import ListBooks from "../components/ListBooks"
import Search from "../components/Search"
import BooksType from "../types/BooksTypes"
import BooksStyled from "../ui/BooksStyled"

const Books: React.FC = () => {
    const listBooks: BooksType[] = [
        {isbn: '978-85-508-0480-6', title: 'Arquitetura Limpa', author: 'Robert C. Martin', coAuthor: [''], publishingCompany: 'Alta Books', description: 'Arquitetura limpa é uma leitura essencial para profissionais que já atuam ou querem ingressar no mercado.'},
        {isbn: '978-85-508-0065-3', title: 'Domain-Driven DESIGN', author: 'Eric Evans', coAuthor: [''], publishingCompany: 'Alta Books', description: 'Este livro pertence às prateleiras de todos os desenvolvedores sérios de software.'},
        {isbn: '978-85-7522-724-4', title: 'Refatoração', author: 'Martin Fowler', coAuthor: ['Kent Beck'], publishingCompany: 'Novatec', description: 'Qualquer tolo escreve um código que um computador possa entender. Bons programadores escrevem códigos que os seres humanos podem entender.'},
    ]

    const [listVisible, setListVisible] = useState<boolean>(true)
    const [filterValues, setFilterValues] = useState<string>("")
    const [book, setBook] = useState<BooksType>({isbn: '', title: '', author: '', coAuthor: [''], publishingCompany: '', description: ''})

    const handleNewBook = () => {
        setListVisible(false)
        setBook({isbn: '', title: '', author: '', coAuthor: [''], publishingCompany: '', description: ''})
    }

    return (
        <BooksStyled>
            <div className="aside">
                <h1>LIVROS</h1>
                <div onClick={handleNewBook} className="itens"><b>ADCIONAR</b></div>
            </div>
            <div className="content">
                <Search 
                    filterValues={filterValues} 
                    setFilterValues={setFilterValues}/>
                <ListBooks 
                    visible={listVisible} 
                    setVisible={setListVisible}
                    filterValues={filterValues}
                    setBook={setBook}
                    books={listBooks} />
                <Book 
                    visible={listVisible} 
                    setVisible={setListVisible}
                    book={book}
                    setBook={setBook}/>
            </div>
        </BooksStyled>
    )
}

export default Books
