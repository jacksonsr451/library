import { v4 as uuid4 } from 'uuid'
import RentBookObject from "../interfaces/RentBookObject"

class RentBookEntity {
    
    id: string
    responsable: string
    isbn: string
    data: Date
    devolution: Date
    status: boolean

    constructor(props: RentBookObject) {
        this.id = props.id || uuid4()
        this.responsable = props.responsable
        this.isbn = props.isbn
        this.data = props.data
        this.devolution = props.devolution
        this.status = props.status || false
    }

    get object(): RentBookObject {
        return {
            id: this.id,
            responsable: this.responsable,
            isbn: this.isbn,
            data: this.data,
            devolution: this.devolution,
            status: this.status
        }
    }
}

export default RentBookEntity
