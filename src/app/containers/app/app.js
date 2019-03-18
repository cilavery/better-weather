import { connect } from 'react-redux'
import { AppComponent } from '../../components/app'
import { appFetchWeatherByGeoAction, appFetchFiveDayByGeoAction } from '../../actions'

export const getGeoLocation = (lat, lon, unit, dispatch) => {
  const payload = {
    unit,
    lat,
    lon
  }
  dispatch(appFetchWeatherByGeoAction(payload))
  dispatch(appFetchFiveDayByGeoAction(payload))
}

const mapStateToProps = state => {
  return {
    weather: state.current.weather,
    fiveDay: state.fiveDay.weather,
    unit: state.unit
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: (lat, lon, unit) => getGeoLocation(lat, lon, unit, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)