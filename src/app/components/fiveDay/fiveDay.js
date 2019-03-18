import React, { Component, Fragment } from 'react'
import { selectFiveDayData } from '../../selectors'
import { calculateDayOfWeek, formatUnit, convertTemp } from '../../shared/utils'

export default class FiveDay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temps: []
    }
  }

  componentDidMount() {
    const { weather } = this.props
    const fiveDays = selectFiveDayData(weather)
    this.setState({
      temps: fiveDays
    })
  }

  componentDidUpdate(prevProps) {
    let newTemps
    const { unit } = this.props
    if (prevProps.unit !== this.props.unit) {
      newTemps = convertTemp(this.state.temps, unit)
      console.log('NEW TEMPS', newTemps)
      this.setState({
        temps: newTemps
      })
    }
  }

  render() {
    const { unit } = this.props
    const { temps } = this.state
    console.log('TEMPS', temps)
    return (
      <Fragment>
        <h4>Five day forecast</h4>
        {
          temps.map((day, idx) => {
            return (
              <div key={idx}>
                <div>{calculateDayOfWeek(day.dt)}</div>
                <div>{day.weather[0].main}</div>
                <div>{Math.round(day.main.temp)}</div>
                <div>{day.weather[0].id}icon</div>
                <div>{formatUnit(unit)}</div>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}
