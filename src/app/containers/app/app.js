import { connect } from 'react-redux'
import { AppComponent } from '../../components'
import { appFetchWeatherByGeoAction } from '../../actions'

export const getGeoLocation = (dispatch, lat, lon) => {
  const payload = {
    lat: 40.678177,
    lon: -73.944160
  }
  dispatch(appFetchWeatherByGeoAction, payload)
}

const mapStateToProps = (state) => {
  console.log('state in app container', state)
  return {
    weather: state.currentWeather
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: (lat, lon) => getGeoLocation(dispatch, lat, lon)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)