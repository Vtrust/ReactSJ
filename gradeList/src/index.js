import React from 'react';
import ReactDOM from 'react-dom';
import './style/app.css';
import Grade from './views/Grade'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Grade />, document.getElementById('root'));
registerServiceWorker();
