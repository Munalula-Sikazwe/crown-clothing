import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {store,persis} from "./redux/store";
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

