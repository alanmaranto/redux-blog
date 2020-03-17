import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/index';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from 'redux-thunk';

import reducers from "./redux/reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers, //Todos los reducers
  {}, // Estado inicial
  composeEnhancers(applyMiddleware(reduxThunk)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);