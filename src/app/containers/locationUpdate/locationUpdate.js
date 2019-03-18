import { connect } from 'react-redux'
import { LocationUpdateComponent } from '../../components/locationUpdate'
import { appFetchWeatherByGeoAction, appFetchFiveDayByGeoAction } from '../../actions'

export const getGeoLocation = (lat, lon, dispatch) => {
  const payload = {
    unit: 'imperial',
    lat,
    lon
  }
  dispatch(appFetchWeatherByGeoAction(payload))
  dispatch(appFetchFiveDayByGeoAction(payload))
}

const mapStateToProps = state => {
  return {
    weather: state.current.weather,
    fiveDay: state.fiveDay.weather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: (lat, lon) => getGeoLocation(lat, lon, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationUpdateComponent)