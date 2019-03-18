export const selectFiveDayData = (data) => {
  let today = new Date()
  return data.filter(forecast => {
    return (today.getDate() !== new Date(forecast.dt * 1000).getDate()) && (new Date(forecast.dt_txt).getHours() === 9)
  })
}