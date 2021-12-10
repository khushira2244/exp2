const request = require('request')
const forecast = (longtitude, latitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=822c22892008965bc87fedc990c52344&query=' +
    latitude +
    ',' +
    longtitude +
    '&units=f'
  let body
  request({ url, json: true }, (error, { body } = response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degress out.'
      )
    }
  })
}
module.exports = forecast
