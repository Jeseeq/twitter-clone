import React from 'react'
import Comment from './Comment'
import CommentForm from '../containers/CommentForm'
export default class Tweet extends React.Component {
  onClick (e) {
    e.preventDefault()
  }
  render() {
    const comments = this.props.tweet.comments.map((comment) => {
      return (
        <Comment key={comment.id} comment={comment} />
      )
    })
    return (
      <div>
      <div className='box tweet'>
        <div className='tweet-username'>@{this.props.tweet.user}</div>
        <div className='date'>{this.props.tweet.time.toString()}</div>
        <p>{this.props.tweet.content}</p>
      </div>
      {comments}
      {this.props.user ? <CommentForm className='comment-form' id={this.props.tweet.id} style={{height: 50, width: 300}} placeholder='Type some comment' buttonText='Comment' /> : null}
    </div>
    )
  }
}
