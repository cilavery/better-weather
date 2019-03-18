import { connect } from 'react-redux'
import { AppComponent } from '../../components/app'
import { appFetchWeatherByGeoAction } from '../../actions'

export const getGeoLocation = (lat, lon, dispatch) => {
  const payload = {
    lat,
    lon
  }
  dispatch(appFetchWeatherByGeoAction(payload))
}

const mapStateToProps = state => {
  console.log(state)
  return {
    weather: state.current.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: (lat, lon) => getGeoLocation(lat, lon, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)