import React from 'react';
import Comment from './Comment'
export default class Tweet extends React.Component {
  render() {
    const comments = this.props.tweet.comments.map((comment) => {
      return (
        <Comment comment={comment} />
      )
    })
    return (
      <div>
      <div className='box tweet'>
        <div className='tweet-avatar' />
        <div className='tweet-username'>@{this.props.tweet.user}</div>
        <div className='tweet-date'>{this.props.tweet.time.toString()}</div>
        <p>{this.props.tweet.content}</p>
      </div>
      {comments}
    </div>
    )
  }
}
