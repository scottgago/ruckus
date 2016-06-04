const bodyParser = require('body-parser')

module.exports = (app,express) => {
	//register bodyparsing middleware
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	//register crimeScore controller
	require('../controllers/crimeScore.controller.js')(app,express)
	
	app.get('/api')
}