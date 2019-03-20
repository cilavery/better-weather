import * as Container from './tempUnit'
import * as Actions from '../../actions'

describe('tempUnit Container', () => {
  it('should dispatch appStoreUpdateUnitAction', () => {
    const unit = 'metric'
    const testObj = { testDispatch: () => { } }
    const spyDispatch = jest.spyOn(testObj, 'testDispatch')
    const spyAction = jest.spyOn(Actions, 'appStoreUpdateUnitAction')
    Container.updateUnit(unit, spyDispatch)
    expect(spyDispatch).toBeCalled()
    expect(spyAction).toBeCalled()
  })
})