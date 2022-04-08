import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware())
    )


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render( 

     <Provider store={store}>

         <App />

     </Provider>
  
);

