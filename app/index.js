// Accept modules for DEV Env
module.hot.accept()

import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './src/containers/App'

render((
  <Provider store={store}>
    <HashRouter>
      <Route exact pattern="/" component={App} />
    </HashRouter>
  </Provider>
), document.getElementById('root'))
