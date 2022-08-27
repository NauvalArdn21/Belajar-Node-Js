const geocode = require('./lesson9')
geocode('Boston', (error, confirmed) => {
 console.log('Error', error)
 console.log('Data', confirmed)
})