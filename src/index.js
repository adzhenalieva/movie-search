import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import store from './store/index';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';

const app = (
    <Provider store={store}>
            <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
