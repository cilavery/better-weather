import React, { Component } from 'react'

export default class TempUnit extends Component {
  handleChange = (e) => {
    this.props.updateUnit(e.target.value)
  }

  render() {
    const { unit } = this.props
    return (
      <form>
        <label>Change Unit:</label>
        <select value={unit} onChange={this.handleChange}>
          <option value="imperial">Fahrenheit</option>
          <option value="metric">Celsius</option>
        </select>
      </form>
    )
  }
}
