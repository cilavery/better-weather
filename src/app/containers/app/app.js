import { connect } from 'react-redux'
import { AppComponent } from '../../components'
import { appFetchWeatherByGeoAction } from '../../actions'

export const getGeoLocation = (dispatch) => {
  const payload = {
    lat: 40.678177,
    lon: -73.944160
  }
  dispatch(appFetchWeatherByGeoAction(payload))
}

const mapStateToProps = state => {
  console.log('state in app container', state)
  return {
    weather: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeoLocation: () => getGeoLocation(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent)