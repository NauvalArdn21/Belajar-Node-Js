const request = require('request')
const geocodeURL =
'https://covid19.mathdro.id/api'

request({ url: geocodeURL, json: true }, (error, response) => {
 if (error) {
 console.log('Unable to connect to location services!')
 } else if (response.body.confirmed) {
 console.log('Unable to find location. Try another search.')
 } else {
 const latitude = response.body.confirmed
 const longitude = response.body.confirmed
 console.log(latitude, longitude)
 }
})