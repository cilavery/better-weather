import { selectFiveDayData } from './selectors'

describe('selectFiveDayData selector', () => {
  it('should filter weather forecast to five days', () => {
    let today = new Date('Wed Mar 20 2019 11:22:21 GMT-0400')
    const weatherData = [
      {
        dt: 1553094000,
        dt_txt: "2019-03-20 15:00:00",
        main: { temp: '75' }
      },
      {
        dt: 1553158800,
        dt_txt: "2019-03-21 09:00:00",
        main: { temp: '75' }
      },
      {
        dt: 1553223600,
        dt_txt: "2019-03-22 03:00:00",
        main: { temp: '65' }
      },
      {
        dt: 1553245200,
        dt_txt: "2019-03-22 09:00:00",
        main: { temp: '79' }
      }
    ]
    expect(selectFiveDayData(weatherData, today).length).toEqual(2)
  })
})