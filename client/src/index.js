import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

const store = createStore(reducers)


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render( 

     <Provider store={store}>

         <App />

     </Provider>
  
);

