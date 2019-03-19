import React, { Component, Fragment } from 'react'
import { CurrentWeatherContainer } from '../../containers/currentWeather'
import { FiveDayContainer } from '../../containers/fiveDay'
import { LocationUpdateContainer } from '../../containers/locationUpdate'
import { TempUnitContainer } from '../../containers/tempUnit'
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
    const { weather } = this.props

    return (
      <Fragment>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
          className="justify-content-center mt-5"
        >
          <Tab eventKey="temp" title="Current Temp">
            {
              this.props.weather.isFetching || Object.keys(this.props.weather).length < 1
                ?
                <div>
                  <p>Fetching Weather</p>
                </div>
                : <CurrentWeatherContainer />
            }
            {
              this.props.weather.fetchError
                ?
                <div>
                  <p>There was a problem getting the weather</p>
                </div>
                : null
            }
            {
              !this.state.locationEnabled
                ?
                <div>
                  <p>Please input a city</p>
                </div>
                : null
            }
          </Tab>
          <Tab eventKey="forecast" title="5-Day Forecast">
            {
              this.props.fiveDay.isFetching || Object.keys(this.props.fiveDay).length < 1
                ?
                <div>
                  <p>Fetching Five Day Forecast</p>
                </div>
                : <FiveDayContainer />
            }
            {
              this.props.fiveDay.fetchError
                ?
                <div>
                  <p>There was a problem getting the five day forecast</p>
                </div>
                : null
            }
          </Tab>
        </Tabs>
        <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
          <Container>
            <Navbar.Brand>Location: {weather.name}</Navbar.Brand>
            <TempUnitContainer />
            <LocationUpdateContainer />
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

