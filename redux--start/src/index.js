import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReaducer from'./store/reducers/counter';
import resultReaducer from'./store/reducers/result';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    ctr:counterReaducer,
    res: resultReaducer
});
const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
