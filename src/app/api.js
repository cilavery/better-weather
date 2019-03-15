
export const fetchWeatherByGeo = (payload) => {
  console.log('api payload', payload)
  const unit = 'metric'
  const apiKey = '3317ddd89ed0eaa04733ad6ab3569291'
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${payload.lat}&lon=${payload.lon}&units=${unit}&appid=${apiKey}`)

}


export const fetchWeatherByCity = (payload) => {
  return fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk')
}