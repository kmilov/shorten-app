// Accept modules for DEV Env
module.hot.accept()

import React from 'react'
import {render} from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'

import App from './src/App'

render((
  <HashRouter>
    <div>
      <Route exact pattern="/" component={App} />
    </div>
  </HashRouter>
), document.getElementById('root'))
