// Implement the Form and the actions needed to
// shoort an URL
require('styles/_animations.css');
import React, {Component} from 'react'
import {connect}          from 'react-redux'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HistoryTitle       from 'components/historytitle'
import HistoryTable       from 'components/historytable'
import ShortedLink        from 'components/shortedlink'
import {fetchHistory, deleteHistory, updateShortedState} from 'actions/history'

class HistoryContainer extends Component {
  componentWillMount() {
    this.setState({
      showCopyAction: false
    })
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
            <ReactCSSTransitionGroup
                transitionName="item"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
            {historyRecords}
            </ReactCSSTransitionGroup>
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
