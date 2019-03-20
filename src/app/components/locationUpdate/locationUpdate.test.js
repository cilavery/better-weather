import React from 'react'
import LocationUpdate from './locationUpdate'
import PlacesAutocomplete from 'reactjs-places-autocomplete'
import { shallow } from 'enzyme'

jest.mock('reactjs-places-autocomplete')

describe('LocationUpdate Component', () => {
  it('should call handleChange', () => {
    const wrapper = shallow(<LocationUpdate />)
    expect(wrapper.find(PlacesAutocomplete).length).toEqual(1)
  })
})