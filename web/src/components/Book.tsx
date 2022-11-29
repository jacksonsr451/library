import React, { ChangeEvent, Dispatch, SetStateAction } from "react"
import BooksType from "../types/BooksTypes"
import BookStyled from "../ui/BookStyled"

type BookProps = {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    book: BooksType
    setBook: Dispatch<SetStateAction<BooksType>>
}

const Book: React.FC<BookProps> = (props) => {

    const handleCancel = () => {
        props.setBook({isbn: '', title: '', author: '', coAuthor: [''], publishingCompany: '', description: ''})
        props.setVisible(! props.visible)
    }

    const handleOnChangeForm = (event: ChangeEvent<HTMLInputElement>): void => {
        props.setBook({
            ...props.book,
            [event.target.name]: event.target.value
        })
    }

    return (
        <BookStyled visible={props.visible}>
            <div className="fields">
                <div className="row">
                    <div className="field">
                        <label htmlFor="isbn">ISBN:</label>
                        <input 
                            type="text" 
                            name="isbn" 
                            value={props.book?.isbn} 
                            onChange={handleOnChangeForm} />
                    </div>
                    <div className="field">
                        <label htmlFor="title">TITULO:</label>
                        <input 
                            type="text" 
                            name="title"
                            value={props.book?.title} 
                            onChange={handleOnChangeForm} />
                    </div>
                </div>
                <div className="row">
                    <div className="field">
                        <label htmlFor="publishingCompany">EDITORA:</label>
                        <input 
                            type="text" 
                            name="publishingCompany"
                            value={props.book?.publishingCompany} 
                            onChange={handleOnChangeForm} />
                    </div>
                    <div className="field">
                        <label htmlFor="title">AUTOR:</label>
                        <input 
                            type="text" 
                            name="author"
                            value={props.book?.author} 
                            onChange={handleOnChangeForm} />
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="title">CO-AUTOR(ES):</label>
                    <input 
                        type="text" 
                        name="coAuthor"
                        value={props.book?.coAuthor} 
                        onChange={handleOnChangeForm} />
                </div>
                <div className="field">
                    <label htmlFor="title">DESCRIÇÃO:</label>
                    <input 
                        type="text" 
                        name="description"
                        value={props.book?.description} 
                        onChange={handleOnChangeForm} />
                </div>
            </div>

            <div className="buttons">
                <button type="button">SALVAR</button>
                <button type="button" onClick={handleCancel}>CANCELAR</button>
            </div>
        </BookStyled>
    )
}

export default Book
