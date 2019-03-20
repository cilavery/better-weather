const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

export const calculateDayOfWeek = (UTCFormat) => {
  return days[new Date(UTCFormat * 1000).getDay()]
}

export const formatUnit = (unit) => {
  return unit === 'imperial' ? 'ºF' : 'ºC'
}

export const convertTemp = (temp, unit) => {
  let newTempArr
  if (unit === 'imperial') {
    if (Array.isArray(temp)) {
      newTempArr = temp.map(item => {
        let tempObj = {}
        let newTemp = {
          temp: convertToImperial(Number(item.main.temp))
        }
        tempObj.dt = item.dt
        tempObj.weather = item.weather
        tempObj.main = newTemp
        return tempObj
      })
      return newTempArr
    } else {
      return convertToImperial(temp)
    }
  } else {
    if (Array.isArray(temp)) {
      newTempArr = temp.map(item => {
        let tempObj = {}
        let newTemp = {
          temp: convertToMetric(Number(item.main.temp))
        }
        tempObj.dt = item.dt
        tempObj.weather = item.weather
        tempObj.main = newTemp
        return tempObj
      })
      return newTempArr
    } else {
      return convertToMetric(temp)
    }
  }
}

export const convertToMetric = (temp) => {
  return Math.round((5 / 9) * (temp - 32))
}

export const convertToImperial = (temp) => {
  return Math.round((temp * 9 / 5) + 32)
}