const http = require('http')
let url =
  'http://api.weatherstack.com/current?access_key=822c22892008965bc87fedc990c52344&query=40,-75&units=f'

//'http://api.weatherstack.com/current?access_key=822c22892008965bc87fedc990c52344&query=23.3441,85.3096'
const request = http.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })
  response.on('end', (chunk) => {
    const dataJson = JSON.parse(data)
    console.log(dataJson)
  })
})
request.on('error', (error) => {
  console.log('An error', error)
})

request.end()
