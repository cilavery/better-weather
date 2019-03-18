import React, { Component } from 'react'

export default class CurrentWeather extends Component {



  render() {
    const { dt, main, name, weather } = this.props.weather

    return (
      < div >
        <h1>{name}</h1>
        <h3>{dt}</h3>
        <i>{weather[0].id}</i>
        <p>{main.temp}</p>
        <p>{weather[0].main}</p>
      </div >
    )
  }
}



