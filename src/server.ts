import dotenv from 'dotenv'
const dotEnvResult = dotenv.config()

import path from 'path'
import express from 'express'
import middlewares from './middlewares/global'
import {errorHandler} from './middlewares/errorHandler'
import swagger from './middlewares/swagger'
import config from './config'
import initPassport from './services/passport'
import {seed} from './utils/seeder'

import userRouter from './resources/user/user.router'
import authRouter from './resources/auth/auth.router'
import createLogger from './utils/logger'

import channelRouter from './resources/channel/channel.router'
import categoryRouter from './resources/category/category.router'

const logger = createLogger(module)

export const app = express()

/**
 * General setup
 */

if (config.isDev && dotEnvResult.error) {
	logger.error('Please create .env file at root folder')
}

app.use(middlewares)

app.set('view engine', 'pug')
app.set('views', 'views')
app.use(
	'/bootstrap',
	express.static(path.resolve(__dirname, '../node_modules/bootstrap/dist')),
)

initPassport()

if (config.seed) {
	app.get('/seed', (_, res) => {
		seed()
		res.send('Database seeded')
	})
}

/**
 * Routers
 */
app.use('/auth', authRouter)

app.use('/api/users', userRouter)

app.use('/api/channels', channelRouter)
app.use('/api/categories', categoryRouter)

app.use('/api-docs', swagger)

app.get('/', (req, res) => {
	res.redirect('/api-docs')
})

app.use(errorHandler)
