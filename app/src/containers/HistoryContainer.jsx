// Implement the Form and the actions needed to
// shoort an URL
import React, {Component} from 'react'
import {connect}          from 'react-redux'
import HistoryTitle       from 'components/historytitle'
import HistoryTable       from 'components/historytable'
import ShortedLink        from 'components/shortedlink'

class HistoryContainer extends Component {
  componentWillMount() {
    this.setState({
    })
  }

  handleClearHistory(event) {
    console.log("Im on the container!")
  }
  render() {
    return <div>
      <HistoryTitle
        history={this.props.history.length > 0 ? true : false}
        handler={this.handleClearHistory.bind(this)} />
      <HistoryTable records={this.props.history} />
      <ShortedLink />
      <ShortedLink />
      <ShortedLink />
    </div>
  }
}

export default connect((store) => {
  return {
    history: store.history
  }
})(HistoryContainer)
