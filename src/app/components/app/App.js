import React, { Component } from 'react'
import { CurrentWeatherComponent } from '../currentWeather'
import { FiveDayComponent } from '../fiveDay'

// import '../../../assets/styles/App.css'

class App extends Component {
  componentDidMount() {
    console.log('props in app component', this.props)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Better Weather</h1>
        </header>
        <CurrentWeatherComponent />
        <FiveDayComponent />
      </div>
    );
  }
}

export default App;
