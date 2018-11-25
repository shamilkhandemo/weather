import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import { addCity, setWeather } from './actions/index';


const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
    localStorage.setItem('city', JSON.stringify(store.getState()));
})

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
