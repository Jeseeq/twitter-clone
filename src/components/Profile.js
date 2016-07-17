import React, { Component } from 'react';

const UserCardStat = (props) => {
  return (
      <div>
        <p>{props.title}</p>
        <div>{props.number}</div>
      </div>
    )
}

export default class Profile extends Component {

  render() {
    var number = 0
    const {user} = this.props.user
    this.props.tweets.map((t) => {
       if (user && t.user === user) number++
    })
    return (
      <div className='profile box'>
        <div> @{user}</div>
        <div>
          <UserCardStat title='tweets' number={number} />
        </div>
      </div>
    )
  }
}
