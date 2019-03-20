import * as Utils from './utils'

describe('Utilitiy functions', () => {
  it('should calculate day of week', () => {
    expect(Utils.calculateDayOfWeek('1553504400')).toEqual('Mon')
  })
  it('should return the appropriate temperature unit', () => {
    expect(Utils.formatUnit('metric')).toEqual('ºC')
  })
  it('should call convertToImperial if unit === imperial', () => {
    expect(Utils.convertTemp('0', 'imperial')).toEqual(32)
  })
  it('should call convertToMetric if unit === metric', () => {
    expect(Utils.convertTemp('32', 'metric')).toEqual(0)
  })
  it('converts fahrenheit temp to celsius', () => {
    expect(Utils.convertToMetric('32')).toEqual(0)
  })
  it('converts celsius temp to fahrenheit', () => {
    expect(Utils.convertToImperial('0')).toEqual(32)
  })
})