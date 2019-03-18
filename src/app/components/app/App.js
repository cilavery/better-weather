import React, { Component } from 'react'
import { CurrentWeatherContainer } from '../../containers/currentWeather'
import { FiveDayComponent } from '../fiveDay'

// import '../../../assets/styles/App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationEnabled: true
    }
  }
  componentDidMount() {
    const { getGeoLocation } = this.props
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        getGeoLocation(lat, lon)
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
        <FiveDayComponent />
      </div>
    )
  }
}

