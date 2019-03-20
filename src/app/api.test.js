import { fetchWeather, fetchFiveDay } from './api'

describe('fetchWeather', () => {
  it('should call current weather API', () => {
    const payload = {}
    let spy = jest.spyOn(global, 'fetch')
    fetchWeather(payload)
    expect(spy).toBeCalled()
  })
  it('should call five day forecast API', () => {
    const payload = {}
    let spy = jest.spyOn(global, 'fetch')
    fetchFiveDay(payload)
    expect(spy).toBeCalled()
  })
})