import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore( reducer );

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById( 'root' ),
);
registerServiceWorker();
