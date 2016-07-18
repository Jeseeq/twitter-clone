import Form from '../components/Form'
import {connect} from 'react-redux'
import {addTweet} from '../actions/tweets'

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    form: state.form,
    button: ownProps.button
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: (user, text) => {
      dispatch(addTweet(user, text))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
