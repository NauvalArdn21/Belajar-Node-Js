const request = require('request')
const geocode = (address, callback) => {
const url = 'https://covid19.mathdro.id/api'

 request({ url: url, json: true }, (error, response) => {
 
 callback( {
 latitude: response.body.deaths,
 longitude: response.body.confirmed,
 location: response.body.confirmed.value
 })
 }
 )}

module.exports = geocode
