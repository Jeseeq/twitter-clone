import { connect } from 'react-redux'
import Login from '../components/Login'
import {login, loginSuccess, loginFailure, logout} from '../actions/user'

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username) => {
      if(username.length > 0) {
        dispatch(login(username))
      } else {
        dispatch(loginFailure('Please Enter Username'))
      }
    },
    logout: () => {
      dispatch(logout())
    }

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
