import React, { Component } from 'react'
import { CurrentWeatherContainer } from '../../containers/currentWeather'
import { FiveDayContainer } from '../../containers/fiveDay'
import { LocationUpdateContainer } from '../../containers/locationUpdate'
import { TempUnitContainer } from '../../containers/tempUnit'

import '../../../assets/styles/weather-icons.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationEnabled: true
    }
  }
  componentDidMount() {
    const { getGeoLocation, unit } = this.props
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        getGeoLocation(lat, lon, unit)
      })
    } else {
      this.setState({
        locationEnabled: false
      })
    }
  }

  render() {
    //@todo make shared components for fetch/error/city input
    if (this.props.weather.isFetching || Object.keys(this.props.weather).length < 1) {
      return (
        <div className="App">
          <p>Fetching Weather</p>
        </div>
      )
    }

    if (this.props.weather.fetchError) {
      return (
        <div className="App">
          <p>There was a problem getting the weather</p>
        </div>
      )
    }

    if (this.props.fiveDay.fetchError) {
      return (
        <div className="App">
          <p>There was a problem getting the five day forecast</p>
        </div>
      )
    }

    if (!this.state.locationEnabled) {
      return (
        <div className="App">
          <p>Please input a city</p>
        </div>
      )
    }

    return (
      <div className="App">
        <CurrentWeatherContainer />
        {
          this.props.fiveDay.isFetching || Object.keys(this.props.fiveDay).length < 1
            ?
            <div>
              <p>Fetching Five Day Forecast</p>
            </div>
            : <FiveDayContainer />
        }
        <LocationUpdateContainer />
        <TempUnitContainer />
      </div>
    )
  }
}

