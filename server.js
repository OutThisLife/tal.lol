import React from 'react'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { Server } from 'http'
import Express from 'express'
import compression from 'compression'

import data from './data'
import Index from './src/views/index'

const
	port = process.env.PORT || 3000,
	app = new Express(),
	server = new Server(app)

// -----------------------------------------------

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src'))
app.use(compression())
app.use(Express.static(path.join(__dirname, 'src')))

app.get('/', async (req, res) => {
	const markup = renderToString(<Index {...data} />)
	return res.render('index', { markup })
})

app.get('/data', (req, res) => res.send(data))

// -----------------------------------------------

server.listen(port, () => console.log('Listening on port', port))
