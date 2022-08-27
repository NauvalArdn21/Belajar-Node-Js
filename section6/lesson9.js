const request = require('request')
const geocode = (address, callback) => {
const url = 'https://covid19.mathdro.id/api'

 request({ url: url, json: true }, (error, response) => {
 if (error) {
 callback('Unable to connect to location services!', undefined)
 } else if (response.body.confirmed) {
 callback('Unable to find location. Try another search.',
undefined)
 } else {
 callback(undefined, {
 latitude: response.body.deaths,
 longitude: response.body.confirmed,
 location: response.body.confirmed.value
 })
 }
 })
}
module.exports = geocode
