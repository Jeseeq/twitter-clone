import {connect} from 'react-redux'
import {addComment} from '../actions/tweets'
import Form from '../components/Form'

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.id,
    user: state.user
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleSubmit: (user, text, id) => {
      dispatch(addComment(user, text, id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
