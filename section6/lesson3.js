const request = require('request')

const url = 'https://covid19.mathdro.id/api'

request({url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.confirmed.value )
})