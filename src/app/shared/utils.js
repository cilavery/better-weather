const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

export const calculateDayOfWeek = (UTCFormat) => {
  return days[new Date(UTCFormat * 1000).getDay()]
}

export const formatUnit = (unit) => {
  if (unit === 'imperial') {
    return 'ºF'
  } else {
    return 'ºC'
  }
}

export const convertTemp = (temp, unit) => {
  let newTempArr
  if (unit === 'imperial') {
    if (Array.isArray(temp)) {
      newTempArr = temp.map(item => {
        console.log('item', item)
        convertToImperial(Number(item.main.temp))
        return item
      })
      return newTempArr
    } else {
      return convertToImperial(temp)
    }
  } else {
    if (Array.isArray(temp)) {
      newTempArr = temp.map(item => {
        console.log('item', item)

        convertToMetric(Number(item.main.temp))
        return item
      })
      return newTempArr
    } else {
      return convertToMetric(temp)
    }
  }
}

const convertToMetric = (temp) => {
  return Math.round((5 / 9) * (temp - 32))
}

const convertToImperial = (temp) => {
  return Math.round((temp * 9 / 5) + 32)
}