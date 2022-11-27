import 'dotenv/config'
import path from 'path'
import 'reflect-metadata'

import { DataSource } from 'typeorm'

// eslint-disable-next-line no-eval
// const value = eval(process.env.PRODUCTION)

console.log(path.resolve('./src/infrastructure/models/*.{ts,js}'))
console.log(path.resolve('./migrations/*.{ts,js}'))
console.log(process.env.PRODUCTION)

const appDataSource = new DataSource(
    process.env.PRODUCTION === 'true' ? 
    {
        type: 'mongodb',
        url: process.env.DB_URL,
        synchronize: true,
        entities: [path.resolve('./src/infrastructure/models/*.{ts,js}')],
        migrations: [path.resolve('./migrations/*.{ts,js}')]
    } : {
        type: 'better-sqlite3',
        database: 'database.sqlite',
        synchronize: true,
        entities: [path.resolve('./src/infrastructure/models/*.{ts,js}')],
        migrations: [path.resolve('./migrations/*.{ts,js}')]
    }
)

export default appDataSource
