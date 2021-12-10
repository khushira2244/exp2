const request = require('request')

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?types=poi&access_token=pk.eyJ1Ijoia2hpbmFzMjIiLCJhIjoiY2tweHZiaHhxMWE3ajJ3cDlha3I1NXV0NyJ9.XhaiS_4xNa-aBamoPFjiyw'
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback('unable to connect service', undefined)
    } else if (body.features.length == 0) {
      callback('unable to find the location', 'try another search', undefined)
    } else {
      callback(undefined, {
        longtitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      })
    }
  })
}
module.exports = geocode
