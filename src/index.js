import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));


registerServiceWorker();
