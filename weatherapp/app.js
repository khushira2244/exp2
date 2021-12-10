const request = require('request')

const geocode = require('./utilis/geoode')
const forecast = require('./utilis/forecast')
const addrss = process.argv[2]
if (!addrss) {
  console.log('please provide the addresss')
} else {
  geocode(addrss, (error, { longtitude, latitude, location } = {}) => {
    if (error) {
      console.log('error', error)
    }
    forecast(longtitude, latitude, (error, forecasteData) => {
      console.log('dataLocation', location)
      console.log(forecasteData)
    })
  })
}
console.log(process.argv)
