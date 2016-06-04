const crimeData = require('../models/model.crimeData.js');
const yelpAPI = require('../lib/yelpAPI.js');
const request       = require('request')
const configHeaders = require('../config/config.crimeData.js')

module.exports = {
	getCrimeAroundBars: (req, res) => {
		configHeaders.url = configHeaders.url + '?$where=within_circle(geo_crime_location, ' + req.body.latitude + ', ' + req.body.longitude + ', 27300)'

		request(configHeaders, (err, data) => {
			res.json(data)
		})
		
	}
};
