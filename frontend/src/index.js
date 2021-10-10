import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../src/Reducers/IndexReducer'
// create a golble store by using redux thunck reducers and redux and react
//provider is used for track the globle store from any compnent in the front end application
//This store makes data passing easier than use props to do that.
const store = createStore(reducers,compose(applyMiddleware(thunk)));  

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
    <App />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);


