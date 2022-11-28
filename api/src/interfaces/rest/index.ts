import bodyParser from 'body-parser'
import express from 'express'
import type Config from "../../config"
import appDataSource from "../../data-source"
import booksRoutesFactory from './books'
import categoryRoutesFactory from './categories'
import libraryRoutesFactory from './libraries'
import rentBookRoutesFactory from './rentBooks'

const rest = (config: Config) => {    
    appDataSource.initialize()
    .then(() => {
        const app = express()

        app.use(bodyParser.json())

        app.use('/books', booksRoutesFactory(config.services))
        app.use('/category', categoryRoutesFactory(config.services))
        app.use('/library', libraryRoutesFactory(config.services))
        app.use('/rent-book', rentBookRoutesFactory(config.services))
        
        return app.listen(config.port)
    }).catch((error) => console.log(error))
}

export default rest
