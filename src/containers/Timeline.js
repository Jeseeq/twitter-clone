import React from 'react'
import {connect} from 'react-redux'

import Form from './TweetForm'
import Tweet from '../components/Tweet'

export class Timeline extends React.Component {
  render() {
    const tweets = this.props.tweets.map(t => {
      return (
        <Tweet user={this.props.user} tweet={t} key={t.id} comment={t.comment} />
      )
    })

    return (
      <div className='timeline'>
        {this.props.user ? <Form placeholder='What is going on?' buttonText='Tweet'/> : null }
          <div className='twist-list'>
            {tweets}
          </div>
      </div>
    )
  }
}

export default connect(state => ({ tweets: state.tweets, user: state.user.user }))(Timeline);
