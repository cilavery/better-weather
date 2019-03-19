import React, { Component } from 'react'
import { formatUnit, convertTemp } from '../../shared/utils'

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      temp: ''
    }
  }

  componentDidMount() {
    const { main } = this.props.weather
    this.setState({
      temp: Math.round(main.temp)
    })
  }

  componentDidUpdate(prevProps) {
    let newTemp
    if (prevProps.unit !== this.props.unit) {
      newTemp = convertTemp(this.state.temp, this.props.unit)
      this.setState({
        temp: newTemp
      })
    }
    if (prevProps.weather.main.temp !== this.props.weather.main.temp) {
      this.setState({
        temp: Math.round(this.props.weather.main.temp)
      })
    }
  }

  render() {
    const { date, temp } = this.state
    const { name, weather } = this.props.weather
    const { unit } = this.props
    const today = date.toDateString()
    return (
      < div >
        <h1>{name}</h1>
        <h3>{today}</h3>
        <i className={`wi wi-owm-${weather[0].id}`}></i>
        <p>{temp}</p>
        <p>{weather[0].main}</p>
        <p>{formatUnit(unit)}</p>
      </div >
    )
  }
}



