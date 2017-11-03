import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppContainer from './App';
import registerServiceWorker from './registerServiceWorker';

import { init } from 'd2/lib/d2';

init({
    baseUrl: 'http://localhost:8080/api/',
    schemas: [],
}).then((d2) => {
    ReactDOM.render(
        <Provider store={configureStore()}>
            <AppContainer />
        </Provider>,
        document.getElementById('root')
    );
});

registerServiceWorker();
