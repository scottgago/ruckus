const request = require('request')

var crimes = {}

request(crimeConfig.crimeData, (req, res)=>{
	for(var i = 0; i < res.body.length; i++){
		if(!crimes[res.body[i].city]){
			crimes[res.body[i].city] = []
			crimes[res.body[i].city].push(res.body[i])
		} else {
			crimes[res.body[i].city].push(res.body[i])
		}
	}
})

module.exports = crimes

