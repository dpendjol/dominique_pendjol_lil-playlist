import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './0-Reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import {url, getDataFromApi} from './api-client';

getDataFromApi(url)
.then(data => {
  const store = createStore(allReducers, {songList: data},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
     
     ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );

})
.catch ((err) => {
  ReactDOM.render(
    <React.StrictMode>  
        <h1> Er is een fout opgetreden </h1>
        {console.log(err)}
    </React.StrictMode>,
    document.getElementById('root')
  );
});
