import React from 'react'
import { renderToString } from 'react-dom/server'
import path from 'path'
import { Server } from 'http'
import Express from 'express'
import compression from 'compression'
import data from './data'
import Homepage from './src/pages/home'

// -----------------------------------------------

const
	port = process.env.PORT || 3000,
	app = new Express(),
	server = new Server(app)

// -----------------------------------------------

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src'))
app.use(compression())
app.use(Express.static(path.join(__dirname, 'src')))

app.get('/', (req, res) => {
	const markup = renderToString(<Homepage {...data} />)
	return res.render('index', { markup })
})

// -----------------------------------------------

server.listen(port, () => console.log('Listening on port', port))
