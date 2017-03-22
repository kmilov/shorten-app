// Implement the Form and the actions needed to
// shoort an URL
import React, {Component} from 'react'
import {connect}          from 'react-redux'
import HistoryTitle       from 'components/historytitle'
import HistoryTable       from 'components/historytable'
import ShortedLink        from 'components/shortedlink'
import {fetchHistory, deleteHistory, updateShortedState} from 'actions/history'

class HistoryContainer extends Component {
  componentWillMount() {
    this.props.dispatch(fetchHistory())
  }

  handleClearHistory(event) {
    this.props.dispatch(deleteHistory())
  }

  render() {
    let historyRecords = this.props.history
        .sort(function(a,b){
          return new Date(b.startDate) - new Date(a.startDate);
        })
        .map((record, i) => {
            console.log("R => ", record.rStartDate);
            return <ShortedLink
              key={i}
              shortcode={record.shortcode}
              redirectCount={record.redirectCount}
              startDate={record.rStartDate}
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
