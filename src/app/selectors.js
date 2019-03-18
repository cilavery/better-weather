export const selectWeatherData = (state) => {
  const weatherData = {}
  const data = state.currentWeather
  weatherData.date = data.dt
  weatherData.temp = data.main.temp
  weatherData.city = data.name
  weatherData.icon = data.weather[0].id
  weatherData.description = data.weather[0].main

  console.log('WEATHER DATA', weatherData)
  return weatherData
}