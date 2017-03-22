// Implement the Form and the actions needed to
// shoort an URL
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Column} from 'ui/layout'
import {shoooort} from 'actions/shoort'
import Shortener from 'components/shortener'

class ShortenerContainer extends Component {
  componentWillMount() {
    this.setState({
      url: ''
    })
  }

  handleSubmit(event) {
    this.props.dispatch(shoooort(this.state.url)).then(() => {
      this.setState({url: ''})
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  render() {
    return <Shortener
      url={this.state.url}
      handleSubmit={this.handleSubmit.bind(this)}
      handleChange={this.handleChange.bind(this)} />
  }
}

export default connect((store) => {
  return {
    shoortstate: store.shoortstate
  }
})(ShortenerContainer)
