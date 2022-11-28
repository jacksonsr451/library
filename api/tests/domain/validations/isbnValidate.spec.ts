import IsbnException from "@domain/exceptions/IsbnException"
import isbnValidate from "@domain/validations/isbnValidate"

describe('IsbnValue', () => {
    it('should be get value isbn', () => {
        const isbn: string = '978-85-508-0460-6'
        const isbnValue = isbnValidate(isbn)

        expect(isbn).toBe(isbnValue)
    })

    it('should be return a error to be isbn is not valid', () => {
        const isbn: string = '977-85-508-0460-6'
        const error = () => isbnValidate(isbn)

        expect(error).toThrow(IsbnException)
        expect(error).toThrow('ISBN não é valido fora do range válido!')
    })

    it('should be return a error to be isbn is not a valid length', () => {
        const isbn: string = '978-85-508-046-6'
        const error = () => isbnValidate(isbn)

        expect(error).toThrow(IsbnException)
        expect(error).toThrow('ISBN não tem um tamanho válido!')
    })

    it('should be return a error to be isbn is not a valid value', () => {
        const isbn: string = '978-85-780-1055-x'
        const error = () => isbnValidate(isbn)

        expect(error).toThrow(IsbnException)
        expect(error).toThrow('ISBN não é valido!')
    })

})