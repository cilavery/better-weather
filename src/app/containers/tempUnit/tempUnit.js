import { connect } from 'react-redux'
import { TempUnitComponent } from '../../components/tempUnit'
import { appStoreUpdateUnitAction } from '../../actions'

export const updateUnit = (unit, dispatch) => {
  const payload = {
    unit
  }
  dispatch(appStoreUpdateUnitAction(payload))
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
    updateUnit: (unit) => updateUnit(unit, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TempUnitComponent)