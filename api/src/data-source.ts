import 'dotenv/config'
import path from 'path'
import 'reflect-metadata'

import { DataSource } from 'typeorm'

const appDataSource = new DataSource(
    process.env.PRODUCTION === 'true' ? 
    {
        type: 'mongodb',
        url: process.env.DB_URL,
        synchronize: true,
        entities: [path.resolve(`./infrastructure/models/*.{ts,js}`)],
        migrations: [path.resolve('../migrations/*.{ts,js}')]
    } : {
        type: 'better-sqlite3',
        database: 'database.sqlite',
        synchronize: true,
        entities: [path.resolve('./infrastructure/models/*.{ts,js}')],
        migrations: [path.resolve('../migrations/*.{ts,js}')]
    }
)

export default appDataSource
