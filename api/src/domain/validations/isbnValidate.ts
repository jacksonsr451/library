import IsbnException from "@domain/exceptions/IsbnException"

const isbnValidate = (isbn: string) => {

    function validate(isbn: string) {
        const value = isbn.split('-', 1)
        verifyRangeInIsbn(value)
        const codeString = sinitizeIsbn(isbn)
        verifyLengthToIsbn(codeString)
        verifyIfIsDigitValid(codeString)
        validateResult(codeString)

        return isbn
    }

    function sinitizeIsbn(isbn: string) {
        return isbn.substring(4)
            .replace('-', '')
            .replace(' ', '')
            .replace('-', '')
            .replace(' ', '')
            .replace('-', '')
            .replace(' ', '')
    }

    function verifyRangeInIsbn(value: string[]) {
        const message: string = 'ISBN não é valido fora do range válido!'
        if (parseInt(value[0]) !== 978 && parseInt(value[0]) !== 979) {
            throw new IsbnException(message)
        }
    }

    function verifyLengthToIsbn(codeString: string) {
        const message: string = 'ISBN não tem um tamanho válido!'
        if (codeString.length !== 10) {
            throw new IsbnException(message)
        }
    }

    function isNumber(string: string, message: string) {
        try {
            return isNaN(parseInt(string))
        } catch (error) {
            throw new IsbnException(message)
        }
    }

    function verifyIfIsDigitValid(codeString: string) {
        const message: string = 'ISBN não é valido!'
        isNumber(codeString.slice(0, 8), message)
        isNumber(codeString[9], message)
        if (codeString[9].toLowerCase() === "x") throw new IsbnException(message)
    }

    function validateResult(codeString: string) {
        const message: string = 'ISBN não é valido!'
        let result: number = 0
        for (let index = 0; index < 9; index++) {
            result += parseInt(codeString[index]) * (10 - index)
        }
        if (codeString[9].toLowerCase() === "x") result += 10
        else result += parseInt(codeString[9])
        console.log(result % 11 !== 0)
        if (result % 11 !== 0) throw new IsbnException(message)
    }

    return validate(isbn)
}

export default isbnValidate
