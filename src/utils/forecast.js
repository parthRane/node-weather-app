const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/69c681f946c21f3506ab349e4ecf8173/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_description[0] + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + 'degrees out. The humidity is' + body.current.humidity+ "%")
        }
    
    })
}

module.exports = forecast