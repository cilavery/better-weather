import apiKeys from './apiKeys'

const key = apiKeys.weatherKey


export const fetchWeatherByGeo = (payload) => {
  const unit = payload.unit
  const lat = payload.lat
  const lon = payload.lon
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok')
    })
}

export const fetchFiveDayByGeo = (payload) => {
  const unit = payload.unit
  const lat = payload.lat
  const lon = payload.lon
  return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok')
    })
}


export const fetchWeatherByCity = (payload) => {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${key}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok')
    })
}