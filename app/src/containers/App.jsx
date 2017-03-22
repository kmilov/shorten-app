import React, {Component}       from 'react'
import {connect}                from 'react-redux'
import {Container} from 'ui/layout'
import ShortedLink              from 'components/shortedlink'
import Heading                  from 'components/heading'
import ShortenerContainer       from './ShortenerContainer'
import HistoryContainer         from './HistoryContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Heading/>
        <ShortenerContainer />
        <HistoryContainer />
      </Container>
    )
  }
}

// Map the State from redux into the App component
export default connect((store) => {
  return {
    history: store.history,
    shoortstate: store.shoortstate
  }
})(App)
