const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

export const calculateDayOfWeek = (UTCFormat) => {
  return days[new Date(UTCFormat * 1000).getDay()]
}