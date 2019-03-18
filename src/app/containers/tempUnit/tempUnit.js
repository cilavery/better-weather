import { connect } from 'react-redux'
import { TempUnitComponent } from '../../components/tempUnit'
import { appStoreUpdateUnit } from '../../actions'

export const updateUnit = (unit, dispatch) => {
  const payload = {
    unit
  }
  dispatch(appStoreUpdateUnit(payload))
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