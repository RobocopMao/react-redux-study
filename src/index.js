import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import AppReducer from './reducers'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

// Store
const store = createStore(AppReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker();
