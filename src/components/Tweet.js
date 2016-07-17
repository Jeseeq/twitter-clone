import React from 'react';
import Comment from './Comment'
export default class Tweet extends React.Component {
  render() {
    return (
      <div className='box tweet'>
        <div className='tweet-avatar' />
        <div className='tweet-username'>@{this.props.tweet.user}</div>
        <div className='tweet-date'>{this.props.tweet.time.toString()}</div>
        <p>{this.props.tweet.content}</p>
      </div>
    )
  }
}
