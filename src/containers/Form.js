import React from 'react';
import { connect } from 'react-redux';

import {addTweet} from '../actions/tweets';
import {inputChanged} from '../actions/form';

export class Form extends React.Component {

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    const text = this.props.form.text
    if (text.length > 140) return

    this.props.dispatch(addTweet(text, this.props.user))
    this.props.dispatch(inputChanged(''))
  }

  onChange(e) {
    this.props.dispatch(inputChanged(e.target.value))
  }

  render() {
    let len = this.props.form.text.length
    let disabled = (len >= 140 || len == 0)
    return (
      <div className='tweet-form'>
        <form onSubmit={this.onSubmit}>
          <textarea value={this.props.form.text} onChange={this.onChange}
            placeholder='What is going on?' />
          <span style={{color: (len >= 140 ? 'red' : 'blue')}}>
            {len}
          </span>
          <button type='submit' disabled={disabled} >Send tweet</button>
        </form>
      </div>
    )
  }
}

export default connect(state => ({ form: state.form, user: state.user.user }))(Form);
