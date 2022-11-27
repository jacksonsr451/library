import { v4 as uuid4 } from 'uuid'
import CategoryObject from '../interfaces/CategoryObject'

class CategoryEntity {

    id: string
    name: string
    description: string

    constructor(props: CategoryObject) {
        this.id = props.id || uuid4()
        this.name = props.name
        this.description = props.description
    }

    get object(): CategoryObject {
        return {
            id: this.id,
            name: this.name,
            description: this.description
        }
    }
    
}

export default CategoryEntity
