import bookServiceFactory from '@application/factories/bookServicesFactory'
import categoryServiceFactory from '@application/factories/categoryServiceFactory'
import libraryServiceFactory from '@application/factories/libraryServiceFactory'
import rentBookServiceFactory from '@application/factories/rentBookServiceFactory'
import Config from '@settings/config'
import appDataSource from '@settings/data-source'
import start from '@interfaces/index'


(async () => {
    const config: Config = {
        port: Number(process.env.PORT) || 3000,
        services: {
            BookService: bookServiceFactory(appDataSource),
            CategoryService: categoryServiceFactory(appDataSource),
            LibraryService: libraryServiceFactory(appDataSource),
            RentBookService: rentBookServiceFactory(appDataSource)
        }
    }       

    start(config)
})()
