import React, { Component, Fragment } from 'react'
import { selectFiveDayData } from '../../selectors'
import { calculateDayOfWeek, formatUnit, convertTemp } from '../../shared/utils'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class FiveDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temps: []
    }
  }

  componentDidMount() {
    const { weather } = this.props
    this.selectAndSetWeather(weather)
  }

  componentDidUpdate(prevProps) {
    let newTemps
    const { unit } = this.props
    if (prevProps.unit !== this.props.unit) {
      newTemps = convertTemp(this.state.temps, unit)
      this.setState({
        temps: newTemps
      })
    }
    if (prevProps.weather !== this.props.weather) {
      this.selectAndSetWeather(this.props.weather)
    }
  }

  selectAndSetWeather(weather) {
    const fiveDays = selectFiveDayData(weather)
    this.setState({
      temps: fiveDays
    })
  }

  render() {
    const { unit } = this.props
    const { temps } = this.state
    return (
      <div className="text-center pt-5">
        <Container>
          <Row className="justify-content-center">
            {
              temps.map((day, idx) => {
                return (
                  <Col lg={2} key={idx} className="border p-4">
                    <div className="p-2">{calculateDayOfWeek(day.dt)}</div>
                    <div className="p-2">{day.weather[0].main}</div>
                    <i className={`wi wi-owm-${day.weather[0].id} forecast`}></i>
                    <div className="d-flex flex-row justify-content-center align-items-baseline">
                      <div className="pt-5 forecast-text">{Math.round(day.main.temp)}</div>
                      <div>{formatUnit(unit)}</div>
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    )
  }
}
