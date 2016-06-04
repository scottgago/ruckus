const bodyParser = require('body-parser');
const crimeScoreController = require('../controllers/crimeScore.controller.js');

module.exports = (app, express) => {
	//register bodyparsing middleware
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	//register crimeScore controller	
	app.post('/api', crimeScoreController);
}