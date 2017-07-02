const
	express = require('express'),
	compression = require('compression'),

	port = process.env.PORT || 3000,
	dev = process.env.NODE_ENV !== 'production',

	app = express()

app.use(express.static(__dirname))
app.listen(port, () => console.log('Listening on port', port))