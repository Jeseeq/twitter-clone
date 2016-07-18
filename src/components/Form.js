import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      text: ''
    }
  }
  onChange(e) {
    this.setState({
      text: e.target.value,
      len: e.target.value.length
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.props.handleSubmit(this.props.user.user, this.state.text, this.props.id)
    this.setState({
      text: '',
    })
  }
  render() {
    let len = this.state.text.length
    let disabled = (len >= 140 || len == 0)
    let {className} = this.props
    return (
      <div className={className || 'tweet-form'} >
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder={this.props.placeholder}
            style={this.props.style}
            value={this.state.text}
            onChange={this.onChange}
           />
            <span style={{color: (len >= 140 ? 'red' : 'blue')}}>
              {this.state.text.length}
            </span>
          <button type='submit' disabled={disabled}>{this.props.buttonText}</button>
        </form>
      </div>
    )
  }
}
