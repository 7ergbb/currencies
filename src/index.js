import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import store from './store/Store';
import App from "./components/App.js";
import Cookies from 'universal-cookie';

render(
    <Provider store={store}>
        <App cookie={new Cookies()}/>
    </Provider>,
    document.getElementById('root')
);
