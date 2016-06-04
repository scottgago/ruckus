'use strict'

const bodyParser           = require('body-parser')
const crimeScoreController = require('../controllers/crimeScore.controller.js')

module.exports = (app, express) => {
	//register bodyparsing middleware
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json())
	//register crimeScore controller
	require('../controllers/crimeScore.controller.js')(app,express)
	
	app.post('/api/crime', crimeScoreController )
	app.ppst('/api/vice')
}