import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import GradeApp from './GradeApp';
import registerServiceWorker from './registerServiceWorker';

import store from './Store.js';

ReactDOM.render(
    <Provider store={store}>
         <GradeApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
