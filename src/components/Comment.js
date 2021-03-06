
import React from 'react';

export default class Comment extends React.Component {
  render() {
    return (
      <div className='box comment'>
        <div className='tweet-username'>@{this.props.comment.name}</div>
        <div className='date'>{this.props.comment.time.toString()}</div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}
