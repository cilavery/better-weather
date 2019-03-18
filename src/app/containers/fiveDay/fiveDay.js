import { connect } from 'react-redux'
import { FiveDayComponent } from '../../components/fiveDay'

const mapStateToProps = state => {
  return {
    weather: state.fiveDay.weather.list
  }
}

export default connect(mapStateToProps, null)(FiveDayComponent)