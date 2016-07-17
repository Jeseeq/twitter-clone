import React, { Component } from 'react';

export default class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.username;
    this.props.login(input.value);
    input.value = '';
  }

  render() {
    const {logout} = this.props
    const {user, error} = this.props.user
    return (
      <div>
      {!user &&
        <div>
          <form className="login" onSubmit={this.handleSubmit}>
            <input ref="username" placeholder='Username' type='text' />
            <button onClick={this.handleSubmit}>Login</button>
          </form>
          <p>{error}</p>
        </div>
        }
        {user &&
        <div>
          <p>You are currently logged in as <b>{user}</b>.</p>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
        }
      </div>
    )
  }
}
