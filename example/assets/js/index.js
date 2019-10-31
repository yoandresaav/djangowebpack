//./node_modules/.bin/webpack --config webpack.config.js --watch
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

ReactDOM.render(<App/>, document.getElementById('root'))

import SecondApp from './components/sec'
ReactDOM.render(<SecondApp />, document.getElementById('sec'))

import ContainerBoost from './components/containerboost';
ReactDOM.render(<ContainerBoost />, document.getElementById('cont-boost'))