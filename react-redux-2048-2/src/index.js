import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './reducer/index';
import App from "./App";



import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
