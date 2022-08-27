const request = require('request')
const url = 'https://covid19.mathdro.id/api'

request({ url: url, json: true }, (error, response) => {
 console.log(response.body.deaths.value + 'jumlah kematian nya')
})