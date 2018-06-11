import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './reducer/index';

import Game from './components/game/game';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
    <Game />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
