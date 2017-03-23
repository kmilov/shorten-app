// Implement the Form and the actions needed to
// shoort an URL
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Column} from 'ui/layout'
import {shoooort, setInProgress, setFinished} from 'actions/shoort'
import Shortener from 'components/shortener'
import Spinner from 'components/spinner'


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
    let shortener = <Spinner />
    if (!this.props.shoortstate.shoorting){
      shortener = <Shortener
        url={this.state.url}
        handleSubmit={this.handleSubmit.bind(this)}
        handleChange={this.handleChange.bind(this)}/>
    }

    return shortener
  }
}

export default connect((store) => {
  return {
    shoortstate: store.shoortstate
  }
})(ShortenerContainer)
