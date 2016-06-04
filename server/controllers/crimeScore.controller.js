const request = require('request')


module.exports = (req,res,next) =>{

	request("https://jgentes-Crime-Data-v1.p.mashape.com/crime")

}