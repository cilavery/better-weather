const apiKey = '3317ddd89ed0eaa04733ad6ab3569291'

export const fetchWeatherByGeo = (payload) => {
  const unit = 'metric'
  const lat = payload.lat
  const lon = payload.lon
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok')
    })
}


export const fetchWeatherByCity = (payload) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${apiKey}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok')
    })
}