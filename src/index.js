import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducer from './redux/index-reducer';

const store= createStore(
	allReducer
)
ReactDOM.render(<Provider store={store}><App2 /></Provider>, document.getElementById('root'));
registerServiceWorker();
