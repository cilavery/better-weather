import { connect } from 'react-redux'
import { CurrentWeatherComponent } from '../../components/currentWeather'

const mapStateToProps = state => {
  return {
    weather: state.current.weather,
    unit: state.unit
  }
}
export default connect(mapStateToProps, null)(CurrentWeatherComponent)