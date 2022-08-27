const geocode = (address, callback) => {
    setTimeout(() => {
    const data = {
    latitude: 2,
    longitude: 39
    }
    callback(data)
    }, 2000)
   }
   geocode('Philadelphia', (data) => {
    console.log(data)
   })