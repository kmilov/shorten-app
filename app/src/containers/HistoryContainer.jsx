// Implement the Form and the actions needed to
// shoort an URL
import React, {Component} from 'react'
import {connect}          from 'react-redux'
import {fetchHistory, deleteHistory}       from 'actions/history'
import HistoryTitle       from 'components/historytitle'
import HistoryTable       from 'components/historytable'
import ShortedLink        from 'components/shortedlink'

class HistoryContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchHistory())
  }

  handleClearHistory(event) {
    this.props.dispatch(deleteHistory())
  }

  render() {
    let historyRecords = this.props.history.map((record, i) => {
        return <ShortedLink
          key={i}
          shortcode={record.shortcode}
          link={record.link}/>
    })

    let history = <noscript/>

    if(historyRecords.length) {
      history = <div>
        <HistoryTitle handler={this.handleClearHistory.bind(this)} />
        <HistoryTable records={this.props.history} />
        {historyRecords}
      </div>
    }

    return history
  }
}

export default connect((store) => {
  return {
    history: store.history
  }
})(HistoryContainer)
