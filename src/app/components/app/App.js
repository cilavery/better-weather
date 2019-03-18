import React, { Component } from 'react'
import { CurrentWeatherComponent } from '../currentWeather'
import { FiveDayComponent } from '../fiveDay'

// import '../../../assets/styles/App.css'

class App extends Component {
  componentDidMount() {
    console.log('props in app component', this.props)
    this.props.getGeoLocation()
  }

  render() {
    return (
      <div className="App">
        <CurrentWeatherComponent />
        <FiveDayComponent />
      </div>
    );
  }
}

export default App