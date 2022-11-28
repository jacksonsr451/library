class IsbnException extends Error {
    constructor(msg: string) {
        super(msg);

        Object.setPrototypeOf(this, IsbnException.prototype);
    }
}

export default IsbnException
