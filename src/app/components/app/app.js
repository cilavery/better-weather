import React, { Component, Fragment } from 'react'
import { CurrentWeatherContainer } from '../../containers/currentWeather'
import { FiveDayContainer } from '../../containers/fiveDay'
import { LocationUpdateContainer } from '../../containers/locationUpdate'
import { TempUnitContainer } from '../../containers/tempUnit'
import { Spinner } from '../../shared'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

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
    const { weather, fiveDay } = this.props
    return (
      <div>
        {
          typeof weather !== 'undefined'
            ?
            < Fragment >
              <Container>
                <Navbar bg="dark" expand="lg" variant="dark" className="justify-content-center">
                  <Container>
                    <Navbar.Brand>Location: <em>{weather.name}</em></Navbar.Brand>
                    <LocationUpdateContainer />
                  </Container>
                </Navbar>
              </Container>
              <Tabs
                id="controlled-tab-example"
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
                className="justify-content-center mt-5"
              >
                <Tab eventKey="temp" title="Current Temp" className="pb-3">
                  {
                    weather.isFetching || Object.keys(weather).length < 1
                      ?
                      <div>
                        <Spinner />
                        <p className="text-center pt-5">Fetching Weather...</p>
                      </div>
                      : <CurrentWeatherContainer />
                  }
                  {
                    weather.fetchError
                      ?
                      <div className="text-center pt-5">
                        <p>There was a problem getting the weather</p>
                      </div>
                      : null
                  }
                  {
                    !this.state.locationEnabled
                      ?
                      <div className="text-center pt-5">
                        <p className="text-center pt-5">Please input a city</p>
                      </div>
                      : null
                  }
                </Tab>
                <Tab eventKey="forecast" title="5-Day Forecast" className="pb-5">
                  {
                    fiveDay.isFetching || Object.keys(fiveDay).length < 1
                      ?
                      <div>
                        <Spinner />
                        <p className="text-center pt-5">Fetching Weather...</p>
                      </div>
                      : <FiveDayContainer />
                  }
                  {
                    fiveDay.fetchError
                      ?
                      <div className="text-center pt-5">
                        <p>There was a problem getting the five day forecast</p>
                      </div>
                      : null
                  }
                </Tab>
              </Tabs>
              <Container>
                <Navbar sticky="bottom" expand="lg" variant="dark" bg="dark">
                  <Container>
                    <Navbar.Brand>Better Weather App</Navbar.Brand>
                    <TempUnitContainer />
                  </Container>
                </Navbar>
              </Container>
            </Fragment >
            : null
        }
      </div>
    )
  }
}

