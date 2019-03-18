import React, { Component, Fragment } from 'react'
import { selectFiveDayData } from '../../selectors'

export default class FiveDay extends Component {
  render() {
    const { weather } = this.props
    const fiveDays = selectFiveDayData(weather)
    return (
      <Fragment>
        <h4>Five day forecast</h4>
        {
          fiveDays.map((day, idx) => {
            return (
              <div key={idx}>
                <div>{day.dt}</div>
                <div>{day.main.temp}</div>
                <div>{day.weather[0].id}icon</div>
                <div>{day.weather[0].main}</div>
              </div>
            )
          })
        }
      </Fragment>
    )
  }
}
