import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Footer from '../components/Footer'
import Login from './LoginContainer'
import Profile from '../components/Profile'
import {tweets} from '../data/tweets'
import {loadTweets} from '../actions/tweets'
import Timeline from '../containers/Timeline'

class App extends Component {

  componentDidMount() {
    this.props.loadTweets(tweets)
  }
  render() {
    const {user, tweets} = this.props
    return (
      <div>
        <Login />
        <div className="container">
          {user.user ?  <Profile user={user} tweets={tweets} /> : null}
          <Timeline className="content"/>
        </div>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadTweets: (tweets) => {
      dispatch(loadTweets(tweets))
    }
   } 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
