import bodyParser from 'body-parser'
import express from 'express'
import type Config from "../../config"
import appDataSource from "../../data-source"
import booksRoutesFactory from '@interfaces/rest/books'
import categoryRoutesFactory from '@interfaces/rest/categories'
import libraryRoutesFactory from '@interfaces/rest/libraries'
import rentBookRoutesFactory from '@interfaces/rest/rentBooks'

const rest = (config: Config) => {    
    appDataSource.initialize()
    .then(() => {
        const app = express()

        app.use(bodyParser.json())

        app.use('/api/v1/books', booksRoutesFactory(config.services))
        app.use('/api/v1/categories', categoryRoutesFactory(config.services))
        app.use('/api/v1/library', libraryRoutesFactory(config.services))
        app.use('/api/v1/rent-books', rentBookRoutesFactory(config.services))
        
        return app.listen(config.port)
    }).catch((error) => console.log(error))
}

export default rest
