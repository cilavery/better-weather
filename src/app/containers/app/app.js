import { connect } from 'react-redux'
import { AppComponent } from '../../components/app'
import { appFetchWeatherAction, appFetchFiveDayAction, appStoreLocationEnabledAction } from '../../actions'

export const getGeoLocation = (lat, lon, unit, dispatch) => {
  const payload = {
    unit,
    lat,
    lon
  }
  dispatch(appFetchWeatherAction(payload))
  dispatch(appFetchFiveDayAction(payload))
}

export const updateLocationEnabled = (payload, dispatch) => {
  dispatch(appStoreLocationEnabledAction(payload))
}

const mapStateToProps = state => {
  return {
    weather: state.current.weather,
    fiveDay: state.fiveDay.weather,
    unit: state.unit,
    locationEnabled: state.locationEnabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: (lat, lon, unit) => getGeoLocation(lat, lon, unit, dispatch),
    updateLocationEnabled: (payload) => updateLocationEnabled(payload, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)