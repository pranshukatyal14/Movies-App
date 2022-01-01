import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore  } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import reducer from './store/reducer';

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer );
//const store=createStore(reducer);
const store=createStore(persistedReducer)
const persistor=persistStore(store);

ReactDOM.render(
 // <React.StrictMode>
 <Provider store={store}>
  

   <App />
   

 </Provider>,
 // </React.StrictMode>,
  document.getElementById('root')
);


