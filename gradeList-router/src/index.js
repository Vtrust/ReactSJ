import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import GradeApp from './GradeApp';
import registerServiceWorker from './registerServiceWorker';

import store from './Store.js';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GradeApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
